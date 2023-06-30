import ExpenseItem from "./ExpenseItem";
import React,{useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props){

  const[filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler=seletedYear=>{
    setFilteredYear(seletedYear);
  };

    return (
        <Card className="expenses">
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {props.items.map(expense =>
          <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
          />)}
        </Card>
      );
}

export default Expenses;