import React from "react";

const globalState = {
  title: "O titulo do contexto",
  body: "O body do contexto",
  counter: 0,
};

const GlobalContext = React.createContext();

const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const {
    contextState: { title },
  } = React.useContext(GlobalContext);
  return <h1>{title}</h1>;
};

const P = () => {
  const {
    contextState: { body, counter },
    setContextState,
  } = React.useContext(GlobalContext);
  return (
    <p
      onClick={() =>
        setContextState((prevState) => {
          return { ...prevState, counter: prevState.counter + 1 };
        })
      }
    >
      {body} {counter}
    </p>
  );
};

function UseContextExample() {
  const [contextState, setContextState] = React.useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default UseContextExample;
