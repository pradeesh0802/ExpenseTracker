import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const numTransactions = expenses.length;

  return (
    <div className="expense-summary">
      <h2 style={{textAlign:"left"}}>Expense Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th style={{textAlign:"right"}}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Expenses</td>
            <td>₹{total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Number of Transactions</td>
            <td>{numTransactions}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseSummary;
