import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [inputTitle,setinputTitle]=useState('');
  // const [inputAmount,setinputAmount]=useState(0);
  // const [inputDate,setinputDate]=useState();
  const [input, setInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });
  const titleChangeHandler = (event) => {
    // setinputTitle(event.target.value);
    // setInput({
    //   ...input,
    //   inputTitle:event.target.value});
    setInput((prevState) => {
      return { ...prevState, inputTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setinputAmount(event.target.value);
    setInput({
      ...input,
      inputAmount: event.target.value,
    });
  };
  const dateChageHandler = (event) => {
    // setinputDate(event.target.value);
    setInput({
      ...input,
      inputDate: event.target.value,
    });
  };
  const formHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    const expenseData = {
      title: input.inputTitle,
      amount: input.inputAmount,
      date: new Date(input.inputDate),
      eid:Math.random().toString()
    };
    props.onAddNewExpense(expenseData);
    setInput({
      inputTitle: "",
      inputAmount: "",
      inputDate: "",
    })
    props.onButtonClick();
    
  };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={input.inputTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={input.inputAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={input.Date}
            onChange={dateChageHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onButtonClick}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
