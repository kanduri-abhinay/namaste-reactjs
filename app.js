import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <img
      alt="logo"
      className="logo"
      src={"https://foodvilla.no/src/img/logo.png"}
    />
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {
  return <h1>body</h1>;
};
const Footer = () => {
  return <h1>Footer</h1>;
};
const App = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
