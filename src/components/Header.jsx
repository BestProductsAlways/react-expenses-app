import React from "react";
import MainTitle from "./MainTitle";

const Header = ({ titleHandle }) => {
  return (
    <header>
      <MainTitle children={titleHandle} />
    </header>
  );
};

export default Header;
