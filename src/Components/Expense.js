import ExpenseItem from "./ExpenseItem";
import React ,{useState} from "react";
import './Expense.css';
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {

  const [filterYear,setFilterYear] =useState(new Date().getFullYear().toString());
  
  const listSelectHandler =(selectedOption)=>
  {
    setFilterYear(selectedOption);
  }
  const listByYear=props.expenses.filter(expense=>{
  
    return expense.date.getFullYear().toString()===filterYear;
  })


  return (
    <div>
     
    <div className="expenses">
    <ExpensesFilter currentYear={filterYear} onListSelect={listSelectHandler}/>
    <ExpenseChart filterDetails={listByYear}></ExpenseChart>
    <ExpenseList expenseitems={listByYear}></ExpenseList>   
    </div>
    </div>
  );
}
export default Expense;
