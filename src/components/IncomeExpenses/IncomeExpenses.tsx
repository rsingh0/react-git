import React, { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseState";
import {
  IExpenseContext,
  ITransaction,
} from "../../interfaces/ExpenseInterfaces";

import "./IncomeExpenses.module.scss";

const IncomeExpenses = (): JSX.Element => {
  const { transactions } = useContext<IExpenseContext>(ExpenseContext);

  const amounts = transactions.map(
    (transaction: ITransaction["transaction"]) => transaction.amount
  );

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
