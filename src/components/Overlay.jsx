import React from "react";
import useOverlayContext from "../hooks/useOverlayContext";
import useExpensesContext from "../hooks/useExpensesContext";
import ExpensesForm from "./ExpensesForm";
import NavigationMenu from "./NavigationMenu";

const Overlay = () => {
  const { isExpensesEdit, isMenu } = useOverlayContext();
  const {
    editDescriptionInput,
    editCostInput,
    editDateInput,
    editCategoryInput,
    editDescriptionDefaultValue,
    editCostDefaultValue,
    editDateDefaultValue,
    editCategoryDefaultValue,
  } = useExpensesContext();

  return (
    <>
      <p>hello i am overlay</p>
      {isExpensesEdit && (
        <ExpensesForm
          refHandle={{
            descriptionInput: editDescriptionInput,
            costInput: editCostInput,
            dateInput: editDateInput,
            categoryInput: editCategoryInput,
          }}
          idHandle={{
            formId: "edit-expenses-form",
            descriptionInputId: "edit-expense-description",
            costInputId: "edit-expense-cost",
            dateInputId: "edit-expense-date",
            categoryInputId: "edit-expense-category",
          }}
          valueHandle={{
            defaultDescription: editDescriptionDefaultValue.current,
            defaultCost: editCostDefaultValue.current,
            defaultDate: editDateDefaultValue.current,
            defaultCategory: editCategoryDefaultValue.current,
          }}
        />
      )}
      {isMenu && <NavigationMenu />}
    </>
  );
};

export default Overlay;
