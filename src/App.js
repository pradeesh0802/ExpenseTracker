import React, { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expense');
    if (storedExpenses) {
      try {
        const parsedExpenses = JSON.parse(storedExpenses);
        if (Array.isArray(parsedExpenses)) {
          setExpenses(parsedExpenses);
        }
      } catch (error) {
        console.error('Error parsing expenses from localStorage:', error);
      }
    }

    const clearLocalStorageAfterTime = () => {
      const timer = setTimeout(() => {
        localStorage.removeItem('expense');
      }, 1 * 1000);
      return () => clearTimeout(timer);
    };

    window.addEventListener('beforeunload', clearLocalStorageAfterTime);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorageAfterTime);
    };
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expense', JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseSummary expenses={expenses} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
