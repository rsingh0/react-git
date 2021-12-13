export interface ITransaction {
  transaction: {
    id: number;
    text: string;
    amount: number;
    formAmount?: string;
  };
}

export interface ITransactions {
  transactions: ITransaction["transaction"][];
}

export interface IAction {
  id?: number;
  transaction?: ITransaction["transaction"];
  type: string;
}

export interface IExpenseContext {
  transactions: ITransaction["transaction"][];
  addTransaction: (transaction: ITransaction["transaction"]) => void;
  deleteTransaction: (id: number) => void;
}

export interface HeaderProps {
  title: string
}
