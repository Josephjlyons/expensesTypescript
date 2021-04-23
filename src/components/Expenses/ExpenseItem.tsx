import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'



const ExpenseItem = (props: { date: { toLocaleString: (arg0: string, arg1: { month?: string | undefined; day?: string | undefined; }) => any; getFullYear: () => any; }; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; amount: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }): JSX.Element => {
   
   return (
        <Card className="expense-item">
          <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;
