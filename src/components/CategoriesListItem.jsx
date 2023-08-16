import React from "react";
import { FiTrash2 } from "react-icons/fi";
import useMainContext from "../hooks/useMainContext";
import Button from "./Button";

const CategoriesListItem = ({ idHandle, children }) => {
  const { CATEGORIES_URL, deleteItem } = useMainContext();

  const processDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteItem(CATEGORIES_URL, id);
      console.log(`item with id: ${id} has been deleted`);
    }
  };

  const handleClick = () => {
    processDelete(idHandle);
  };

  return (
    <li
      id={`category-${idHandle}`}
      className="grid grid-container grid-container--categories-list-item grid--ai-c grid--all-gap text-capital"
    >
      <p className="category-description">{children}</p>
      <Button
        handleClick={handleClick}
        classHandle={"btn--delete flex flex--ai-c flex--jc-c"}
        children={<FiTrash2 size={24} title={"delete"} />}
      />
    </li>
  );
};

export default CategoriesListItem;
