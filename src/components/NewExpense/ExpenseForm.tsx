
import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props: any): JSX.Element => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')          //Commented out code is doing the same as below but just inside one state
    const [enteredDate, setEnteredDate] = useState('')

    // const[userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleHandler = (event: any) => {
        setEnteredTitle(event.target.value)
        // setUserInput({                                            //Commented out code is two other ways to do it, 'prevState' approach is best way to do it if depends on prevState for update
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};

        // })
    }

    const amountHandler = (event: any) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // })
    }
    const dateHandler = (event: any) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // })

    }

    const submitHandler = (event: any) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2020-04-15'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;