import React from "react";
import useMainContext from "../hooks/useMainContext";
import ExpensesOption from "./ExpensesOption";

const ExpensesSelect = ({
  refHandle,
  handleChange,
  idHandle,
  nameHandle,
  valueHandle,
  required,
}) => {
  const { dataFromAPI } = useMainContext();

  const optionArr = dataFromAPI["categories"]
    ? dataFromAPI["categories"].map(({ id, description }) => (
        <ExpensesOption key={id} children={description} />
      ))
    : [];

  return (
    <select
      ref={refHandle}
      onChange={handleChange}
      id={idHandle}
      name={nameHandle}
      defaultValue={valueHandle}
      required={required}
    >
      {optionArr}
    </select>
  );
};

export default ExpensesSelect;
