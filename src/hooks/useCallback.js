import React from "react";
import P from "prop-types";

const Button = ({ incrementButton }) => {
  console.log("Filho, renderizou");

  return (
    <button type="button" onClick={() => incrementButton(10)}>
      +
    </button>
  );
};

Button.propTypes = {
  incrementButton: P.func,
};

function UseCallbackExample() {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = React.useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log("Pai, renderizou");

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default UseCallbackExample;
