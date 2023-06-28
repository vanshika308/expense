import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    

    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}/>
          <div className='expense-item__description'>
          <ExpenseDetails amount={props.amount}  
          location={props.location}  
           title={props.title} />
          </div>
        </div>
    );
}

export default ExpenseItem;
