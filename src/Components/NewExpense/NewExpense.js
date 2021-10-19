import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [buttonState,setButtonState]=useState(false);
  const buttonHandler=()=>{
    setButtonState((prevstate)=>{return(!prevstate)});
  }
  const addExpenseHandler = (expenseData) =>
  {
    props.onAddExpense(expenseData);
   
  }

  if(buttonState)
  {
    return (
    
  
      <div className="new-expense">
        { <ExpenseForm onAddNewExpense={addExpenseHandler} onButtonClick={buttonHandler}></ExpenseForm> }
        
      </div>
    );
  }
  return (
    
  
    <div className="new-expense">
     
      <button onClick={buttonHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
