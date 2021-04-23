import React, { useState } from 'react';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'


const Expenses = (props: { items: { title: string; amount: number; date: any; }[]; }) => {
  
  const [filteredYear, setFiltedYear] = useState('2021')
  
  const filterChangeHandler = (SelectedYear: any) => {
    setFiltedYear(SelectedYear)

  }
  return (
    <div>

      <Card>
        <ExpenseFilter selected={filteredYear} onFilterYear={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses;