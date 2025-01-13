import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <div className="expense-table">
          <div className="expense-table-header">
            <div>Title</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Actions</div>
          </div>
          <div className="expense-table-body">
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                deleteExpense={deleteExpense}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
