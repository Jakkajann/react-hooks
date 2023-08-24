import React from "react";
import { globalState } from "./data";

export const GlobalContext = React.createContext();

function UseContextExampleContext({ children }) {
  const [state, setState] = React.useState(globalState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default UseContextExampleContext;
