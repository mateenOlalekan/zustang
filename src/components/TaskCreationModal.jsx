import React, { useState } from 'react';
import { 
  PlusCircle, X, Calendar, Clock, Users, Tags, Flag,
  CheckCircle, AlertCircle, Info, FileText, MessageSquare,
  ArrowRight, Send
} from 'lucide-react';
import { CATEGORY_OPTIONS, PRIORITY_OPTIONS, EMPLOYEES } from '../constants/columnConfig';
import { getPriorityColors } from '../utils/styleUtils';

const TaskCreationModal = ({ isOpen, onClose, onSubmit, initialData = {} }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    assignedTo: [],
    category: '',
    estimatedHours: '',
    status: 'todo',
    ...initialData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0  bg-opacity-30 backdrop-blur-sm"></div>
      
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto relative">
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-semibold flex items-center">
            <PlusCircle size={20} className="mr-2 text-blue-500" /> 
            {initialData.id ? 'Edit Task' : 'Create New Task'}
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          {/* Task Title */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FileText size={16} className="mr-2 text-gray-500" /> Task Title
            </label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              className="w-full p-1 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-shadow"
              placeholder="Enter task title"
              required
            />
          </div>
          
          {/* Task Description */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <MessageSquare size={16} className="mr-2 text-gray-500" /> Description
            </label>
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-shadow"
              rows="3"
              placeholder="Task details..."
            />
          </div>
          
          {/* Due Date and Estimated Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-500" /> Due Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="dueDate"
                  value={taskData.dueDate}
                  onChange={handleChange}
                  className="w-full p-1 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-shadow"
                />
                <Calendar size={16} className="absolute left-3 top-1.5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <Clock size={16} className="mr-2 text-purple-500" /> Estimated Hours
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="estimatedHours"
                  value={taskData.estimatedHours}
                  onChange={handleChange}
                  className="w-full p-1 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-300 focus:border-purple-500 transition-shadow"
                  placeholder="0"
                  min="0"
                  step="0.5"
                />
                <Clock size={16} className="absolute left-3 top-1.5 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Category */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Tags size={16} className="mr-2 text-green-500" /> Category
            </label>
            <div className="relative">
              <select
                name="category"
                value={taskData.category}
                onChange={handleChange}
                className="w-full p-1 pl-10 border border-gray-300 rounded-md appearance-none focus:ring-2 focus:ring-green-300 focus:border-green-500 transition-shadow"
              >
                <option value="">Select Category</option>
                {CATEGORY_OPTIONS.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Tags size={16} className="absolute left-3 top-1.5 text-gray-400" />
              <ArrowRight size={16} className="absolute right-3 top-1.5 text-gray-400 transform rotate-90" />
            </div>
          </div>
          
          {/* Assigned To */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Users size={16} className="mr-2 text-orange-500" /> Assigned To
            </label>
            <div className="relative">
              <select
                name="assignedTo"
                value={taskData.assignedTo}
                onChange={(e) => {
                  const value = Array.from(
                    e.target.selectedOptions,
                    option => option.value
                  );
                  setTaskData(prev => ({ ...prev, assignedTo: value }));
                }}
                className="w-full p-1 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition-shadow"
                multiple
              >
                {EMPLOYEES.map(emp => (
                  <option key={emp.id} value={emp.id}>{emp.name} ({emp.department})</option>
                ))}
              </select>
              <Users size={16} className="absolute left-3 top-1.5 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mt-1 flex items-center">
              <Info size={12} className="mr-1" /> Hold Ctrl/Cmd to select multiple employees
            </p>
          </div>
          
          {/* Priority */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Flag size={16} className="mr-2 text-red-500" /> Priority
            </label>
            <div className="grid grid-cols-4 gap-2">
              {PRIORITY_OPTIONS.map(priority => (
                <label 
                  key={priority} 
                  className={`
                    flex items-center justify-center p-2 border-2 rounded-md cursor-pointer
                    ${taskData.priority === priority ? getPriorityColors[priority] : 'border-gray-200 bg-gray-50 text-gray-700'}
                  `}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={priority}
                    checked={taskData.priority === priority}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {priority === 'low' && <CheckCircle size={16} className="mr-1" />}
                  {priority === 'medium' && <Clock size={16} className="mr-1" />}
                  {priority === 'high' && <AlertCircle size={16} className="mr-1" />}
                  {priority === 'urgent' && <Flag size={16} className="mr-1" />}
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </label>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-end gap-1 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
            >
              <X size={16} className="mr-1" /> Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <Send size={16} className="mr-1" /> {initialData.id ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreationModal;