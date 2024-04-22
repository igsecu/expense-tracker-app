import { useState } from "react";

import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);

  const submitTransaction = (e) => {
    e.preventDefault();

    if (text === "") {
      setShow(true);
      setMessage("Text is empty!");
      return;
    }

    if (amount === 0) {
      setShow(true);
      setMessage("Amount can not be 0!");
      return;
    }

    addTransaction({
      id: Math.floor(Math.random() * (1000 - 4) + 4),
      text,
      amount: parseInt(amount),
    });

    setText("");
    setAmount(0);
    setShow(true);
    setAdd(true);
    setMessage("Transaction added successfully!");
    setTimeout(() => {
      setAdd(false);
      setShow(false);
      setMessage("");
    }, 2000);
  };

  return (
    <div className="mt-3 border-bottom border-3">
      <h3>Add New Transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="mb-3">
          <label className="form-label">Text</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {show ? (
          <div
            class={`alert ${add ? "alert-success" : "alert-danger"}`}
            role="alert"
          >
            {message}
          </div>
        ) : (
          <></>
        )}

        <div className="d-grid">
          <button type="submit" className="btn btn-dark">
            Add transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
