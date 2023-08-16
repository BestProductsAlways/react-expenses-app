import React, { useRef } from "react";

const CategoriesContext = React.createContext();

const CategoriesContextProvider = ({ children }) => {
  const descriptionInput = useRef();

  return (
    <CategoriesContext.Provider value={{ descriptionInput }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContextProvider };
export default CategoriesContext;
