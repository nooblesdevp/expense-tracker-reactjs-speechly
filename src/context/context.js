import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpanseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Actino Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <ExpanseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}
    >
      {children}
    </ExpanseTrackerContext.Provider>
  );
};
