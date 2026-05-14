import type { Task } from '../models/task.model';
import { useTask } from '../contexts/TaskContext';

export function TaskTable() {

  const { tasks, removeTask } = useTask();

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 border-b">Nome</th>
            <th className="p-4 border-b">Tipo</th>
            <th className="p-4 border-b">Data</th>
            <th className="p-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((item: Task) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{item.name}</td>
                <td className="p-4 border-b">
                  <span className="px-2 py-1 rounded text-xs bg-cyan-100 text-cyan-800">{item.type}</span>
                </td>
                <td className="p-4 border-b">{item.date}</td>
                <td className="p-4 border-b">
                  <button onClick={() => removeTask(item.id)} className="text-red-500 hover:underline">
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-8 text-center text-gray-500">Nenhuma atividade cadastrada.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}