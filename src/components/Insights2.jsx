import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BarChart from "./BarChart";
import {
  findHighestCostExpense,
  findLowestCostExpense,
} from "../utils/insightsUtils.js";
const Insights2 = () => {
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      {
        label: "Expenses",
        data: [],
      },
    ],
  });
  const { data, isLoading, fetchError } = useFetch(
    "http://localhost:5000/db",
    {}
  );

  useEffect(() => {
    if (!isLoading && data.categories && data.expenses) {
      const categoryDescriptions = data.categories.map(
        (category) => category.description
      );
      // Calculate total expenses for each category
      const categoryTotalCosts = {};
      data.expenses.forEach((expense) => {
        if (categoryTotalCosts[expense.category]) {
          categoryTotalCosts[expense.category] += expense.cost;
        } else {
          categoryTotalCosts[expense.category] = expense.cost;
        }
      });

      // Extract the total costs in the same order as categoryDescriptions
      const totalCostsByCategory = categoryDescriptions.map(
        (categoryDescription) => categoryTotalCosts[categoryDescription] || 0
      );

      setBarData({
        labels: categoryDescriptions,
        datasets: [
          {
            label: "Expenses by Category",
            data: totalCostsByCategory,
          },
        ],
      });
    }
  }, [isLoading, data]);

  // Use isLoading and fetchError to handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  // Extract categoryDescriptions from the fetched data
  const categoryDescriptions = data.categories
    ? data.categories.map((category) => category.description)
    : [];

  const expenses = data.expenses || [];

  // Find the expense with the highest cost
  const highestCostExpense = findHighestCostExpense(expenses);

  const lowestCostExpense = findLowestCostExpense(expenses);

  return (
    <>
      <div className="insights-container">
        <div id="sub-header-text">
          Lets take a look at the categories you spent money on this month
        </div>
        <div id="category-container">
          {categoryDescriptions.map((categoryName, index) => (
            <div className="data-category" key={index}>
              {categoryName}
            </div>
          ))}
        </div>
        <div id="sub-header-text">
          Here is a breakdown of your current Spending
        </div>
        <div className="cost-container">
          <div className="cost-title">Your Highest Cost Expense:</div>
          <div className="cost-details">
            ${highestCostExpense.cost} for {highestCostExpense.description}
          </div>
        </div>
        <div className="cost-container">
          <div className="cost-title">Your Lowest Cost Expense:</div>
          <div className="cost-details">
            ${lowestCostExpense.cost} for {lowestCostExpense.description}
          </div>
        </div>
        <BarChart barData={barData} />
      </div>
    </>
  );
};

export default Insights2;
