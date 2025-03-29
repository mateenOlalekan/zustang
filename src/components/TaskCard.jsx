import React from 'react';
import { useDrag } from 'react-dnd';
import { Edit, ExternalLink, Calendar } from 'lucide-react';
import { getPriorityColor } from '../utils/styleUtils';
import { getCategoryIcon } from '../utils/iconUtils';

const TaskCard = ({ task, status, onEdit, onViewDetails }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className={`mb-2 p-1 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-800">{task.title}</h4>
        <div className="flex items-center space-x-1">
          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <button 
            onClick={() => onEdit(task.id, status)} 
            className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            title="Edit task"
          >
            <Edit size={14} />
          </button>
          <button 
            onClick={() => onViewDetails(task.id, status)} 
            className="p-1 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
            title="View details"
          >
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
      
      {task.description && (
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{task.description}</p>
      )}
      
      <div className="flex flex-wrap gap-2 mt-2">
        {task.category && (
          <span className="flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {getCategoryIcon(task.category)} 
            <span className="ml-1">{task.category}</span>
          </span>
        )}
        
        {task.dueDate && (
          <span className="flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
            <Calendar size={12} className="mr-1" />
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;