import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";
import {
  ITransactions,
  ITransaction,
  IExpenseContext,
  IAction,
} from "../interfaces/ExpenseInterfaces";

// Create Expense Context
export const ExpenseContext = createContext<IExpenseContext | null>(null);

const initialExpenseState: ITransactions = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 9000 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Expense Provider
export const ExpenseProvider = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer<
    (state: ITransactions, action: IAction) => ITransactions
  >(ExpenseReducer, initialExpenseState);

  // Actions
  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      id,
    });
  };

  const addTransaction = (transaction: ITransaction["transaction"]) => {
    dispatch({
      type: "ADD_TRANSACTION",
      transaction,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
