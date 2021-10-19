

import React ,{useState} from "react";
import Expense from "./Components/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const [expenseList,addExpenseItem]=useState([]);
  const addExpenseHandler=(expenseData)=>{
    addExpenseItem((prevState)=>{
      return [expenseData,...prevState];
    })
   
  }
 
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    <Expense expenses={expenseList}></Expense>
    
    </div>
  );
}

export default App;
