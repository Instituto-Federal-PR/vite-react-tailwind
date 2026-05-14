import './App.css'
import { TaskProvider } from './contexts/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskTable } from './components/TaskTable';

function App() {
  
  return (
    <TaskProvider>
      <main className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Gerenciador de Tarefas</h1>
          </header>

          <TaskForm />
          <TaskTable />
        </div>
      </main>
    </TaskProvider>
  );
}

export default App
