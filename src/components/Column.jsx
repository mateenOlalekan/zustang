import React from 'react';
import { useDrop } from 'react-dnd';
import { PlusCircle, FileText } from 'lucide-react';
import TaskCard from './TaskCard';
import useTaskStore from '../store/taskStore';
import { getBorderColorClass, getBgColorClass, getTextColorClass } from '../utils/styleUtils';

const Column = ({ column, onAddClick, onEditCard, onViewDetails }) => {
  const tasks = useTaskStore((state) => state.tasks[column.status]);
  const moveTask = useTaskStore((state) => state.moveTask);
  
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => {
      if (item.status !== column.status) {
        moveTask(item.id, item.status, column.status);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  return (
    <div 
      ref={drop}
      className={`border border-gray-200 rounded-md shadow-sm border-t-4 
        ${getBorderColorClass(column.borderColor)} bg-white
        ${isOver ? 'bg-gray-50' : ''}`}
    >
      <div className={`flex items-center justify-between p-4 border-b ${getBgColorClass(column.borderColor)}`}>
        <div className="flex items-center space-x-2">
          {column.icon}
          <h3 className="font-medium text-gray-800">{column.title}</h3>
          <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600 font-medium">
            {tasks.length}
          </span>
        </div>
        {column.hasIcon && (
          <PlusCircle 
            size={20} 
            className={`${getTextColorClass(column.borderColor)} cursor-pointer`} 
            onClick={onAddClick}
          />
        )}
      </div>
      <div className="p-2 min-h-64 max-h-96 overflow-y-auto">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-400 p-6 h-32">
            <FileText size={24} className="mb-2" />
            <p className="text-sm">No tasks yet</p>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              status={column.status}
              onEdit={onEditCard}
              onViewDetails={onViewDetails}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;