import './ExpenseItems.css';
function ExpenseDetails(props){
    
    return(
        <div>
           <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>${props.amount}</div>
          </div>
        </div>
    );
}
export default ExpenseDetails;