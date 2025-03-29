import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ClipboardList, Filter, RotateCcw, Settings } from 'lucide-react';
import Column from './components/Column';
import TaskCreationModal from './components/TaskCreationModal';
import useTaskStore from './store/taskStore';
import { COLUMNS } from './constants/columnConfig';
import "./App.css";

const App = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track the task being edited
  const [editingTask, setEditingTask] = useState(null);
  
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const editTask = useTaskStore((state) => state.editTask);

  // Open modal for creating a new task
  const handleOpenModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  // Handle task creation or update
  const handleSubmitTask = (taskData) => {
    if (editingTask) {
      editTask(editingTask.id, editingTask.status, taskData);
    } else {
      addTask(taskData);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };

  // Open modal for editing a task
  const handleEditCard = (taskId, status) => {
    const taskToEdit = tasks[status].find(task => task.id === taskId);
    if (taskToEdit) {
      setEditingTask({ ...taskToEdit, status });
      setIsModalOpen(true);
    }
  };

  // Placeholder function for handling card details view
  const handleOpenDetails = (taskId, status) => {
    console.log(`Open details for task ID: ${taskId} from ${status} column`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mx-auto p-4 bg-gray-50 min-h-screen">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <ClipboardList className="mr-2" size={24} /> Task Management
          </h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
              <Filter size={18} />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
              <RotateCcw size={18} />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700">
              <Settings size={18} />
            </button>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COLUMNS.map((column, index) => (
            <Column 
              key={index}
              column={column}
              onAddClick={handleOpenModal}
              onEditCard={handleEditCard}
              onViewDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Task Creation/Edit Modal */}
        {isModalOpen && (
          <TaskCreationModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            onSubmit={handleSubmitTask}
            initialData={editingTask || {}}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default App;