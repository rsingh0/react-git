import React, { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseState";
import {
  ITransaction,
  IExpenseContext,
} from "../../interfaces/ExpenseInterfaces";

import "./AddTransaction.module.scss";

const AddTransaction = (): JSX.Element => {
  const { transactions, addTransaction } = useContext<IExpenseContext>(ExpenseContext);
  const noOfTransactions = transactions.length;
  const id = noOfTransactions === 0 || transactions[noOfTransactions - 1].id + 1;

  const [input, setInput] = useState<ITransaction["transaction"]>({
    id: 0,
    text: "",
    amount: 0,
    formAmount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(input));

    if (!input.text || !input.formAmount) return;
    addTransaction({ ...input, amount: parseInt(input.formAmount) });

    resetForm();
  };

  const resetForm = () => {
    setInput({
      id: 0,
      text: "",
      amount: 0,
      formAmount: "",
    });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            name="text"
            value={input.text}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            name="formAmount"
            value={input.formAmount}
            onChange={handleChange}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
