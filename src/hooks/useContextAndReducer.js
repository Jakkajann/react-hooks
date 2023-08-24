import React from "react";
import P from "prop-types";

//data.js
export const globalState = {
  title: "O titulo do contexto",
  body: "o Body do contexto",
  counter: 0,
};

//actions.js
export const actions = {
  CHANGE_TITLE: "CHANGE_TITLE",
};

//AppContext
export const Context = React.createContext();

// reducer.js
export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_TITLE": {
      return { ...state, title: "mudou" };
    }
    default: {
      return { ...state };
    }
  }
}

//index.js
export function H1() {
  const context = React.useContext(Context);

  return <h1 onClick={() => context.changeTitle()}>{context.state.title}</h1>;
}

export function AppContext({ children }) {
  const [state, dispatch] = React.useReducer(reducer, globalState);

  const changeTitle = () => {
    dispatch({ type: actions.CHANGE_TITLE });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
}

AppContext.propTypes = {
  children: P.node,
};

function UseContextAndReducer() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default UseContextAndReducer;
