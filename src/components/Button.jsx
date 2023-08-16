import React from "react";

const Button = ({ refHandle, handleClick, classHandle, children }) => {
  return (
    <button ref={refHandle} onClick={handleClick} className={classHandle}>
      {children}
    </button>
  );
};

export default Button;
