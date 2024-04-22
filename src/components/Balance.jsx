import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  return (
    <div className="d-flex flex-column justify-content-start">
      <h4 className="mb-0">YOUR BALANCE</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
