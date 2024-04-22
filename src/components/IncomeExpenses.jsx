import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, item) => {
      return (acc += item.amount);
    }, 0)
    .toFixed(2);

  const totalExpense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, item) => {
      return (acc += item.amount * -1);
    }, 0)
    .toFixed(2);

  return (
    <div className="d-flex justify-content-around mt-3 border-bottom border-3">
      <div className="me-3 text-center">
        <h4>INCOME</h4>
        <h4 className="text-success">+${totalIncome}</h4>
      </div>
      <div className="text-center">
        <h4>EXPENSE</h4>
        <h4 className="text-danger">-${totalExpense}</h4>
      </div>
    </div>
  );
};

export default IncomeExpenses;
