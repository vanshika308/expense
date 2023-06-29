import React,{useState} from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
function ExpenseItem(props){
    
    const [price, setPrice] = useState(props.amount);
  
  const clickHandler = () => {
    setPrice(100);
 
  };

    
    return (
        <Card className='expense-item'>
          <div>
          <ExpenseDate date={props.date}/>
          </div>
          <div className='expense-item__description'>
          <ExpenseDetails amount={price}  
          location={props.location}  
           title={props.title} />
          </div>
          <button onClick={clickHandler}>Change</button>
        </Card>
    );
}

export default ExpenseItem;
