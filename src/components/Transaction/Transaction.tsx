import React, { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseState";
import {
  ITransaction,
  IExpenseContext,
} from "../../interfaces/ExpenseInterfaces";

const Transaction = ({ transaction }: ITransaction): JSX.Element => {
  const sign: string = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext<IExpenseContext>(ExpenseContext);
  
  return (
    <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
    {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
</li>
  );
};

export default Transaction;
