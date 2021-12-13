import {
  ITransactions,
  ITransaction,
  IAction,
} from "../interfaces/ExpenseInterfaces";

const ExpenseReducer = (state: ITransactions, action: IAction) :ITransactions => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.transaction, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: ITransaction["transaction"]) =>
            transaction.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export default ExpenseReducer;
