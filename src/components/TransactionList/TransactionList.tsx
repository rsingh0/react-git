import React, { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseState";
import Transaction from "../Transaction/Transaction";
import {
  IExpenseContext,
  ITransaction,
} from "../../interfaces/ExpenseInterfaces";

import "./TransactionList.module.scss";

const TransactionList = (): JSX.Element => {
  const { transactions } = useContext<IExpenseContext>(ExpenseContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: ITransaction["transaction"]) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
