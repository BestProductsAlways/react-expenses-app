import React from "react";

const Main = ({ classHandle, children }) => {
  return <main className={classHandle}>{children}</main>;
};

export default Main;
