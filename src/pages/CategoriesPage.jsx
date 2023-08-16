import React from "react";
import { CategoriesContextProvider } from "../context/CategoriesContext";
import Header from "../components/Header";
import Main from "../components/Main";
import CategoriesForm from "../components/CategoriesForm";
import CategoriesList from "../components/CategoriesList";
import "../styles/expenses.css";

const CategoriesPage = () => {
  return (
    <>
      <Header titleHandle="Categories" />
      <Main classHandle="container container--80 flow-spacing--s">
        <CategoriesContextProvider>
          <CategoriesForm />
          <CategoriesList />
        </CategoriesContextProvider>
      </Main>
    </>
  );
};

export default CategoriesPage;
