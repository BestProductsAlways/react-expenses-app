import React from "react";

const Input = ({
  refHandle,
  idHandle,
  nameHandle,
  valueHandle,
  typeHandle,
  placeHolderHandle,
  minHandle,
  maxHandle,
  stepHandle,
  required,
}) => {
  return (
    <input
      ref={refHandle}
      id={idHandle}
      name={nameHandle}
      defaultValue={valueHandle}
      type={typeHandle}
      placeholder={placeHolderHandle}
      min={minHandle}
      max={maxHandle}
      step={stepHandle}
      required={required}
    />
  );
};

export default Input;
