import React from "react";
import UseContextExampleContext from "./UseContext/context/UseContextExample";
import { Div } from "./UseContext/components/Div";

function UseContextExample() {
  return (
    <UseContextExampleContext>
      <Div></Div>
    </UseContextExampleContext>
  );
}

export default UseContextExample;
