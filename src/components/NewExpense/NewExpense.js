import React,{useState}from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";



const NewExpense=(props)=>{

 const[isEditing,setIsEditing]=useState(false);


  const saveExpenseDataHandler =(enteredExpenseData)=>{
     const expenseData ={
       ...enteredExpenseData,
       id: Math.random().toString()
     };
     
     props.onAddExpense(expenseData);
     setIsEditing(false);
  };

  const stopEditingHandler=()=>{
    setIsEditing(false) ;
  }
  const startEditingHandler =()=>{
    setIsEditing(true);
  }
  return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
    { isEditing && <ExpenseForm 
    onsaveExpenseData={saveExpenseDataHandler}
     onCancel={stopEditingHandler}></ExpenseForm>}
  </div>
};
export default  NewExpense;
