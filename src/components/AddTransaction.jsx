const AddTransaction = () => {
  return (
    <div className="mt-3 border-bottom border-3">
      <h3>Add New Transaction</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Text</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Amount -{" "}
            <span className="fw-bold">+ for Income / - for Expense</span>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount..."
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
