import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('');

    const filterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const expenseToDisplay = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterHandler} 
                />
                <ExpenseList item={expenseToDisplay}/>
            </Card>
        </div>
    );
}
export default Expenses;