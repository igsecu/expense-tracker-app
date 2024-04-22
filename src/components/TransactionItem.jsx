import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li
      className={`list-group-item ${
        transaction.amount < 0
          ? " border-0 border-end border-danger border-5"
          : "border-0 border-end border-success border-5"
      } mb-2 d-flex justify-content-between`}
    >
      <div className="d-flex">
        <span
          className="me-2 text-secondary"
          style={{ cursor: "pointer" }}
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </span>
        {transaction.text}{" "}
      </div>
      <span className="fw-bold">
        {transaction.amount < 0 ? "-" : "+"} $ {transaction.amount}
      </span>
    </li>
  );
};

export default TransactionItem;
