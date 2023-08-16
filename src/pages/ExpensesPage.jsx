import React from "react";
import useExpensesContext from "../hooks/useExpensesContext";
import Header from "../components/Header";
import Main from "../components/Main";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";
import "../styles/expenses.css";

const ExpensesPage = () => {
  const {
    defaultCategory,
    descriptionInput,
    costInput,
    dateInput,
    categoryInput,
  } = useExpensesContext();

  return (
    <>
      <Header titleHandle="Expenses" />
      <Main classHandle="container container--80 flow-spacing--s">
        <ExpensesForm
          refHandle={{
            descriptionInput,
            costInput,
            dateInput,
            categoryInput,
          }}
          idHandle={{
            formId: "expenses-form",
            descriptionInputId: "expense-description",
            costInputId: "expense-cost",
            dateInputId: "expense-date",
            categoryInputId: "expense-category",
          }}
          valueHandle={{
            defaultDescription: "",
            defaultCost: "",
            defaultDate: "",
            defaultCategory: defaultCategory,
          }}
        />
        <ExpensesList />
      </Main>
    </>
  );
};

export default ExpensesPage;
