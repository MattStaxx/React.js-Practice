import React, { useState } from 'react';
import './ExpenseFilter.css';

function ExpenseFilter(props) {

    const yearChangeHandler = (event) => {
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expense-filter__control'>
                <label>Filter by Year</label>
                <select name='year' value={props.selected} onChange={yearChangeHandler}>
                    <option value=''>Select a Year</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select> 
            </div>
        </div>
    );
};

export default ExpenseFilter;