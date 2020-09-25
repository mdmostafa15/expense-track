import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer';
import TransectionReducer from './TransectionReducer';

// Initial state
const initState = {
  transactions: []
}

// Create context
export const GloContext = createContext(initState);

// Provider component
export const GloProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransectionReducer, initState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD',
      payload: transaction
    });
  }

  return (<GloContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GloContext.Provider>);
}