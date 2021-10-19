import './ExpenseDate.css'

function ExpenseDate(props)

{
return (
    <div className="expense-date">
    <div className="expense-date__month">{props.date.toLocaleString('hi-IN', { month: 'long' })}</div>
    <div className="expense-date__year">{props.date.getFullYear()}</div>
    <div className="expense-date__day">{props.date.toLocaleString('hi-IN', {  day: "2-digit" })}</div>
</div>
);


}


export default ExpenseDate;