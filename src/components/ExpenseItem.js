import React from 'react';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="expense-table-row">
      <div>{expense.title}</div>
      <div>₹{expense.amount.toFixed(2)}</div>
      <div>{new Date(expense.date).toLocaleDateString()}</div>
      <div>
        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
