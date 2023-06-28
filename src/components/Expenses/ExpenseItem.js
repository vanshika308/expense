import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
function ExpenseItem(props){
  
    const deleteExpense = () =>{
     const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
    }
    return (
        <Card className='expense-item'>
          <div>
          <ExpenseDate date={props.date}/>
          </div>
          <div className='expense-item__description'>
          <ExpenseDetails amount={props.amount}  
          location={props.location}  
           title={props.title} />
          </div>
          <button onClick={deleteExpense}>DELETE</button>
        </Card>
    );
}

export default ExpenseItem;
