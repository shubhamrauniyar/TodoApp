import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList=(props)=>{
if(props.expenseitems.length===0)
{
    return <h2 className="expenses-list__fallback">No Expenses Found!!</h2>

}

return <ul className="expenses-list"> 
      {
    props.expenseitems.map((expense)=>{
      return <ExpenseItem key={expense.eid} date={expense.date} text={expense.title} price={expense.amount}></ExpenseItem>
    })}
</ul>


}
export default ExpenseList;