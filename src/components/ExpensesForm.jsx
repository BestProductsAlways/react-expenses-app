import React from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import Input from "./Input";
import ExpensesSelect from "./ExpensesSelect";
import Button from "./Button";

const ExpensesForm = ({
  refHandle: { descriptionInput, costInput, dateInput, categoryInput },
  idHandle: {
    formId,
    descriptionInputId,
    costInputId,
    dateInputId,
    categoryInputId,
  },
  valueHandle: {
    defaultDescription,
    defaultCost,
    defaultDate,
    defaultCategory,
  },
}) => {
  const { EXPENSES_URL, createItem, addItem, updateItem, clearForm } =
    useMainContext();

  const {
    editableId,
    editDescriptionInput,
    editCostInput,
    editDateInput,
    editCategoryInput,
  } = useExpensesContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.id.includes("edit")) {
      updateItem(EXPENSES_URL, editableId.current, {
        id: editableId.current,
        [editDescriptionInput.current.name]: editDescriptionInput.current.value,
        [editCategoryInput.current.name]: editCategoryInput.current.value,
        [editDateInput.current.name]: editDateInput.current.value,
        [editCostInput.current.name]: +editCostInput.current.value,
      });
    } else {
      addItem(
        EXPENSES_URL,
        createItem(
          "expenses",
          descriptionInput.current,
          categoryInput.current,
          dateInput.current,
          costInput.current
        )
      );
    }

    clearForm(descriptionInput.current, costInput.current, dateInput.current);
  };

  return (
    <form
      id={formId}
      className="grid grid-container grid-container--expenses grid--all-gap"
      onSubmit={handleSubmit}
    >
      <Input
        refHandle={descriptionInput}
        idHandle={descriptionInputId}
        nameHandle="description"
        valueHandle={defaultDescription}
        typeHandle="text"
        placeHolderHandle="expense description"
        required
      />
      <Input
        refHandle={costInput}
        idHandle={costInputId}
        nameHandle="cost"
        valueHandle={defaultCost}
        typeHandle="number"
        placeHolderHandle="$ 00.00"
        minHandle="0"
        maxHandle="999999.99"
        stepHandle="0.01"
        required
      />
      <Input
        refHandle={dateInput}
        idHandle={dateInputId}
        nameHandle="date"
        valueHandle={defaultDate}
        typeHandle="date"
        required
      />
      <ExpensesSelect
        refHandle={categoryInput}
        idHandle={categoryInputId}
        nameHandle="category"
        valueHandle={defaultCategory}
        required
      />
      <Button classHandle={"btn--submit"} children="add" />
    </form>
  );
};

export default ExpensesForm;
