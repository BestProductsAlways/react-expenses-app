import React, { useRef } from "react";

const ExpensesContext = React.createContext();

const ExpensesContextProvider = ({ children }) => {
  const defaultCategory = "uncategorized";

  const descriptionInput = useRef();
  const costInput = useRef();
  const dateInput = useRef();
  const categoryInput = useRef();

  const editableId = useRef();

  const editDescriptionInput = useRef();
  const editCostInput = useRef();
  const editDateInput = useRef();
  const editCategoryInput = useRef();

  const editDescriptionDefaultValue = useRef();
  const editCostDefaultValue = useRef();
  const editDateDefaultValue = useRef();
  const editCategoryDefaultValue = useRef();

  const fillEditForm = (data) => {
    editDescriptionDefaultValue.current = data["description"];
    editCostDefaultValue.current = data["cost"];
    editDateDefaultValue.current = data["date"];
    editCategoryDefaultValue.current = data["category"];
  };

  return (
    <ExpensesContext.Provider
      value={{
        defaultCategory,
        descriptionInput,
        costInput,
        dateInput,
        categoryInput,
        editableId,
        editDescriptionInput,
        editCostInput,
        editDateInput,
        editCategoryInput,
        editDescriptionDefaultValue,
        editCostDefaultValue,
        editDateDefaultValue,
        editCategoryDefaultValue,
        fillEditForm,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export { ExpensesContextProvider };
export default ExpensesContext;
