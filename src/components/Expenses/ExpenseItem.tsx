import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'



const ExpenseItem = (props: { date: { toLocaleString: (arg0: string, arg1: { month?: string; day?: string }) => any; getFullYear: () => any; }; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; amount: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }): JSX.Element => {

    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluted by React')


    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
