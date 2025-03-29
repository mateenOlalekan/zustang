import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: {
    todo: [],
    inProgress: [],
    testing: [],
    complete: []
  },
  
  // Add a new task
  addTask: (task) => set((state) => ({
    tasks: {
      ...state.tasks,
      todo: [...state.tasks.todo, {
        id: Date.now(),
        ...task,
        createdAt: new Date().toISOString()
      }]
    }
  })),
  
  // Move a task between columns
  moveTask: (taskId, sourceColumn, destinationColumn) => set((state) => {
    // Find the task in the source column
    const taskToMove = state.tasks[sourceColumn].find(task => task.id === taskId);
    
    if (!taskToMove) return state;
    
    // Create new state with the task removed from source and added to destination
    return {
      tasks: {
        ...state.tasks,
        [sourceColumn]: state.tasks[sourceColumn].filter(task => task.id !== taskId),
        [destinationColumn]: [...state.tasks[destinationColumn], taskToMove]
      }
    };
  }),
  
  // Edit a task
  editTask: (taskId, status, updatedData) => set((state) => {
    return {
      tasks: {
        ...state.tasks,
        [status]: state.tasks[status].map(task => 
          task.id === taskId ? { ...task, ...updatedData } : task
        )
      }
    };
  }),
  
  // Delete a task
  deleteTask: (taskId, status) => set((state) => ({
    tasks: {
      ...state.tasks,
      [status]: state.tasks[status].filter(task => task.id !== taskId)
    }
  }))
}));

export default useTaskStore;