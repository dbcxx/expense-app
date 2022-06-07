import React, {useState} from 'react'

import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy = [
  {
    id: "e1",
    title: "toilet paper",
    ammount: 94.12,
    date: new Date(2021, 4, 22),
  },
  {
    id: "e2",
    title: "news paper",
    ammount: 20.22,
    date: new Date(2020, 6, 12),
  },
  {
    id: "e3",
    title: "game Insurance",
    ammount: 394.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e4",
    title: "jet",
    ammount: 1094.12,
    date: new Date(2020, 1, 2),
  },
];

function App() {

const [expenses, setExpenses] = useState(Dummy); 

  const addExpenseHandler =(expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp];
    });
  };


  return (
    <div>
      <div>
      <h1>Expense Tracker App</h1>
      </div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense item={expenses}/>
    </div>
  );
}

export default App;
