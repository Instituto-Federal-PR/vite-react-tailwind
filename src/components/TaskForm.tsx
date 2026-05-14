import React, { useState } from 'react';
import { useTask } from '../contexts/TaskContext';

export function TaskForm() {
  const { addTask } = useTask();
  const [formData, setFormData] = useState({ name: '', type: '', date: '' });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (formData.name && formData.type && formData.date) {
      addTask({ ...formData, id: crypto.randomUUID() });
      setFormData({ name: '', type: '', date: '' }); // Reset
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          placeholder="Nome da atividade" 
          className="border p-2 rounded w-full" required 
        />
        <select 
          value={formData.type}
          onChange={e => setFormData({...formData, type: e.target.value})}
          className="border p-2 rounded w-full" required
        >
          <option value="">Selecione o tipo</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
          <option value="Lazer">Lazer</option>
        </select>
        <input 
          type="date" 
          value={formData.date}
          onChange={e => setFormData({...formData, date: e.target.value})}
          className="border p-2 rounded w-full" required 
        />
      </div>
      <button type="submit" className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700">
        Cadastrar Atividade
      </button>
    </form>
  );
}