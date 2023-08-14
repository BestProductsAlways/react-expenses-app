import './styles.css';

// App.js
import React, { useState } from 'react';

const categoriesData = [
  'Groceries',
  'Entertainment',
  'Dining',
  'Transportation',
  // Add more categories as needed
];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [expenseItem, setExpenseItem] = useState('');
  const [cost, setCost] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const addExpense = () => {
    if (!category || !expenseItem || !cost || !purchaseDate) {
      alert('Please fill in all fields.');
      return;
    }

    const newExpense = {
      category,
      expenseItem,
      cost,
      purchaseDate,
      used: false,
    };

    setExpenses([...expenses, newExpense]);
    setCategory('');
    setExpenseItem('');
    setCost('');
    setPurchaseDate('');
  };

  const handleDelete = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleCheckboxChange = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].used = !updatedExpenses[index].used;
    setExpenses(updatedExpenses);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="input-section">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categoriesData.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Expense Item"
          value={expenseItem}
          onChange={(e) => setExpenseItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <input
          type="date"
          placeholder="Purchase Date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
        <button onClick={addExpense}>Add</button>
      </div>
      <div className="expense-list">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <span>{expense.category}</span>
            <span>{expense.expenseItem}</span>
            <span>{expense.cost}</span>
            <span>{expense.purchaseDate}</span>
            <input
              type="checkbox"
              checked={expense.used}
              onChange={() => handleCheckboxChange(index)}
            />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
