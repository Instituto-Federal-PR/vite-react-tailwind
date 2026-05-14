import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Task } from '../models/task.model';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  // Inicialização preguiçosa (Lazy Initializer) para ler o LocalStorage apenas uma vez
  const [tasks, setTask] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Efeito para persistir no LocalStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTask(prev => [...prev, task]);
  };

  const removeTask = (id: string) => {
    setTask(prev => prev.filter(a => a.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// Hook personalizado para facilitar o uso do contexto
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask deve ser usado dentro de um TaskProvider');
  return context;
};
