import { useContext } from "react";
import CategoriesContext from "../context/CategoriesContext";

const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export default useCategoriesContext;
