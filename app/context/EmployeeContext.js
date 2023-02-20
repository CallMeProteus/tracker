import React, { createContext, useReducer } from 'react';

const EmployeeContext = createContext();

const initialState = {
  name: '',
  id: '',
  role: '',
  schedule: {
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
  },
  tasks: [],
};

const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        name: action.name,
        id: action.id,
        role: action.role,
        schedule: action.schedule,
        tasks: action.tasks,
      };
    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        name: action.name || state.name,
        id: action.id || state.id,
        role: action.role || state.role,
        schedule: action.schedule || state.schedule,
        tasks: action.tasks || state.tasks,
      };
    case 'DELETE_EMPLOYEE':
      return initialState;
      default:
        return state;
    }
  };
  
  const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);
  
    const addEmployee = (name, id, role, schedule, tasks) => {
      dispatch({ type: 'ADD_EMPLOYEE', name, id, role, schedule, tasks });
    };
  
    const updateEmployee = (name, id, role, schedule, tasks) => {
      dispatch({ type: 'UPDATE_EMPLOYEE', name, id, role, schedule, tasks });
    };
  
    const deleteEmployee = () => {
      dispatch({ type: 'DELETE_EMPLOYEE' });
    };
  
    return (
      <EmployeeContext.Provider value={{employee: state, addEmployee, updateEmployee, deleteEmployee }}>
        {children}
      </EmployeeContext.Provider>
    );
  };
  
  export { EmployeeContext, EmployeeProvider };
  
