import { createContext } from 'react';

const TaskContext = createContext();



const initialState = { tasks: [] };

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.task] };
    case 'UPDATE_TASK':
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
      return { tasks: updatedTasks };
    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter((task) => task.id !== action.id);
      return { tasks: filteredTasks };
    default:
      throw new Error();
  }
}

export { taskReducer, initialState };

export default TaskContext;