import React from "react";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList/TransactionList";

import { ExpenseProvider } from "./context/ExpenseState";

const App = (): JSX.Element => {
  const headerTitle: string = "Expense Tracker";

  return (
    <ExpenseProvider>
      <Header title={headerTitle} />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseProvider>
  );
};

export default App;
