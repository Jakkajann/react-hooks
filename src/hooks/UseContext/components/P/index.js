import React from "react";
import { GlobalContext } from "../../context/UseContextExample";

export const P = () => {
  const {
    state: { body, counter },
    setState,
  } = React.useContext(GlobalContext);
  return (
    <p
      onClick={() =>
        setState((prevState) => {
          return { ...prevState, counter: prevState.counter + 1 };
        })
      }
    >
      {body} {counter}
    </p>
  );
};
