import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div
      className="mt-3 border-bottom border-3 overflow-scroll"
      style={{ minHeight: "250px", maxHeight: "250px" }}
    >
      <h3>History</h3>
      <ul className="list-group mb-3 rounded-0">
        {transactions.length > 0 ? (
          transactions.map((t) => (
            <TransactionItem key={t.id} transaction={t} />
          ))
        ) : (
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <p>No transactions to show!</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
