import React from "react";

function UseStateExample() {
  const [state, setState] = React.useState({
    name: "Fernando",
    lastName: "Mocrosky",
  });

  function changeState() {
    setState({ name: "Michael", lastName: "Jackson" });
  }

  return (
    <div>
      <h1>
        {state.name} {state.lastName}
      </h1>
      <button onClick={changeState}>Change</button>
    </div>
  );
}

export default UseStateExample;
