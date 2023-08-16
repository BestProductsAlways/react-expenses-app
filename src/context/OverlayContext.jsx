import React, { useState } from "react";

const OverlayContext = React.createContext();

const OverlayContextProvider = ({ children }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isExpensesEdit, setIsExpensesEdit] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    setIsOverlay(!isOverlay);
    setIsMenu(!isMenu);
  };

  return (
    <OverlayContext.Provider
      value={{
        isOverlay,
        setIsOverlay,
        isExpensesEdit,
        setIsExpensesEdit,
        isMenu,
        setIsMenu,
        handleClick,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayContextProvider };
export default OverlayContext;
