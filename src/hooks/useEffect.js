import React from "react";

const eventFn = () => {
  console.log("h1 clicado");
};

function UseEffectExample() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    console.log("Componente Atualiza");
  });

  React.useEffect(() => {
    console.log("Componente Montou");
  }, []);

  //ComponentWillMount
  React.useEffect(() => {
    document.querySelector("h1").addEventListener("click", eventFn);

    //ComponentWillUnmount Remover lixo da página
    return () => {
      document.querySelector("h1").removeEventListener("click", eventFn);
    };
  }, []);

  //Use effect com dependência
  React.useEffect(() => {
    console.log("Contador mudou para " + counter);
  }, [counter]);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default UseEffectExample;
