import React, { useState } from 'react';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'


const Expenses = (props: { items: { id: any; title: string; amount: number; date: any; }[]; }): JSX.Element => {

  const [filteredYear, setFiltedYear] = useState('2021')

  const filterChangeHandler = (SelectedYear: any) => {
    setFiltedYear(SelectedYear)

  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;

  })

  
  return (
    <div>

      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onFilterYear={filterChangeHandler}
        />
        {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
        {filteredExpenses.length > 0 &&
          (filteredExpenses.map((expense: {
            id: React.Key;
            title: string;
            amount: number;
            date: { toLocaleString: (arg0: string, arg1: { month?: string; day?: string }) => any; getFullYear: () => any; };
          }):
            JSX.Element => (

            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)))}


      </Card>
    </div>
  )
}

export default Expenses;