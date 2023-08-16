import React from "react";
import useMainContext from "../hooks/useMainContext";
import useExpensesContext from "../hooks/useExpensesContext";
import CategoriesListItem from "../components/CategoriesListItem";

const CategoriesList = () => {
  const { isLoading, fetchError, dataFromAPI } = useMainContext();
  const { defaultCategory } = useExpensesContext();
  const renderLoading = () => <p>Please wait, data is loading....</p>;
  const renderError = () => (
    <p>{`${fetchError.name}: ${fetchError.message}`}</p>
  );
  const renderData = () => {
    if (dataFromAPI["categories"].length > 1) {
      return (
        <ul className="flow-spacing--xs">
          {dataFromAPI["categories"].map(({ id, description }) => {
            if (description !== defaultCategory)
              return (
                <CategoriesListItem
                  key={id}
                  idHandle={id}
                  children={description}
                />
              );
          })}
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
      {!isLoading && !fetchError && dataFromAPI["categories"] && renderData()}
    </>
  );
};

export default CategoriesList;
