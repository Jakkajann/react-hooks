import React from "react";
import { GlobalContext } from "../../context/UseContextExample";

export const H1 = () => {
  const {
    state: { title },
  } = React.useContext(GlobalContext);
  return <h1>{title}</h1>;
};
