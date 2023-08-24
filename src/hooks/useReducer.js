import React from "react";

const globalState = {
  title: "O titulo do contexto",
  body: "o Body do contexto",
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "Change": {
      return { ...state, title: "mudou" };
    }
    case "Invert": {
      const { title } = state;
      return { ...state, title: title.split("").reverse().join("") };
    }
    default: {
      return { ...state };
    }
  }
}

function UseReducerExample() {
  const [state, dispatch] = React.useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: "Change" })}>Change</button>
      <button onClick={() => dispatch({ type: "Invert" })}>Invert</button>
    </div>
  );
}

export default UseReducerExample;
