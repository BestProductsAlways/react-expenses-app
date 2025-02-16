import React from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = () => {
  const { isLoading, fetchError, dataFromAPI } = useMainContext();
  const renderLoading = () => <p>Please wait, data is loading....</p>;
  const renderError = () => (
    <p>{`${fetchError.name}: ${fetchError.message}`}</p>
  );
  const renderData = () => {
    if (dataFromAPI["expenses"].length > 0) {
      return (
        <ul>
          {dataFromAPI["expenses"].map(({ id, ...data }) => (
            <ExpensesListItem
              key={id}
              idHandle={`expense-${id}`}
              dataHandle={data}
            />
          ))}
        </ul>
      );
    } else {
      return <p>There is no data to show yet</p>;
    }
  };

  return (
    <>
      {isLoading && renderLoading()}
      {!isLoading && fetchError && renderError()}
      {!isLoading && !fetchError && dataFromAPI["expenses"] && renderData()}
    </>
  );
};

export default ExpensesList;
