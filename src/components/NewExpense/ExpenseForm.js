import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=()=>{
   const[enteredTitle,setEnteredTitle]=useState('');
   const[enteredAmount,setEnteredAmount]=useState('');
   const[enteredDate,setEnteredDate]=useState('');
   const[enteredLocation,setEnteredLocation]=useState('');

   const titlechangeHandler=(event)=>{
      setEnteredTitle(event.target.value);
   }
   const amountchangeHandler=(event)=>{
      setEnteredAmount(event.target.value);
   }
   const datechangeHandler=(event)=>{
      setEnteredDate(event.target.value);
   }
   const locationchangeHandler=(event)=>{
      setEnteredLocation(event.target.value);
   }
 const submitHandler =(event)=>{
   event.preventDefault();
     
     var expensedata={
      name: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location: enteredLocation
     };
     console.log(expensedata);
 };
   return(<form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
           <label>Title:</label>
           <input type='text' id='title' onChange={titlechangeHandler}/>
        </div>
        <div className="new-expense__control">
           <label>Date:</label>
           <input type='date' id='date' onChange={amountchangeHandler}/>
        </div>
        <div className="new-expense__control">
           <label>Amount:</label>
           <input type='number' id='amount' onChange={datechangeHandler}/>
        </div>
        <div className="new-expense__control">
           <label>Location:</label>
           <input type='text'  id ='location' onChange={locationchangeHandler}/>
        </div>
        <div className="new-expense__actions">
           <button type='submit' >Add Expense</button>
        </div>
    </div>
   </form>
    
   );
};
export default ExpenseForm;