import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Transaction 1", amount: -20 },
    { id: 2, text: "Transaction 2", amount: 300 },
    { id: 3, text: "Transaction 3", amount: -10 },
    { id: 4, text: "Transaction 4", amount: 150 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
