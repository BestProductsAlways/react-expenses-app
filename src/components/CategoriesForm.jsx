import React from "react";
import useMainContext from "../hooks/useMainContext";
import useCategoriesContext from "../hooks/useCategoriesContext";
import Input from "./Input";
import Button from "./Button";

const CategoriesForm = () => {
  const { CATEGORIES_URL, createItem, addItem, clearForm } = useMainContext();
  const { descriptionInput } = useCategoriesContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    addItem(CATEGORIES_URL, createItem("categories", descriptionInput.current));
    clearForm(descriptionInput.current);
  };

  return (
    <form
      id="categories-form"
      className="grid grid-container grid-container--categories grid--all-gap"
      onSubmit={handleSubmit}
    >
      <Input
        refHandle={descriptionInput}
        idHandle="category-description"
        nameHandle="description"
        typeHandle="text"
        placeHolderHandle="category description"
        required
      />
      <Button classHandle={"btn--submit"} children="add" />
    </form>
  );
};

export default CategoriesForm;
