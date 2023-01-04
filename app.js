import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
const App = () => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
