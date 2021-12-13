import React, { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseState";
import {
  IExpenseContext,
  ITransaction,
} from "../../interfaces/ExpenseInterfaces";

const Balance = (): JSX.Element => {
  const { transactions } = useContext<IExpenseContext>(ExpenseContext);
  const amounts = transactions.map(
    (transaction: ITransaction["transaction"]) => transaction.amount
  );
  const total =
    amounts.length !== 0
      ? amounts.reduce((acc, val) => acc + val).toFixed(2)
      : 0;

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
