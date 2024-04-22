const IncomeExpenses = () => {
  return (
    <div className="d-flex justify-content-around mt-3 border-bottom border-3">
      <div className="me-3 text-center">
        <h4>INCOME</h4>
        <h4 className="text-success">+$0.00</h4>
      </div>
      <div className="text-center">
        <h4>EXPENSE</h4>
        <h4 className="text-danger">-$0.00</h4>
      </div>
    </div>
  );
};

export default IncomeExpenses;
