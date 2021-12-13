import React from "react";
import { HeaderProps } from "../../interfaces/ExpenseInterfaces";

import "../../App.scss";

const Header = ({ title }: HeaderProps): JSX.Element => {
  return <h2>{title}</h2>;
};

export default Header;
