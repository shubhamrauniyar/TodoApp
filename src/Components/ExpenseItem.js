import "./ExpenseItem.css";
import ExpenseDate from'./ExpenseDate';

function Expenseitem(props) {
  return (
    <li className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.text}</h2>
        <div className="expense-item__price">₹ {props.price}</div>
      </div>
    </li>
  );
}

export default Expenseitem;
