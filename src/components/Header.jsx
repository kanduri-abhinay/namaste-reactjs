import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [isLoggedIn, updateLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {!isLoggedIn ? (
        <button onClick={() => updateLoggedIn(true)}>LogIn</button>
      ) : (
        <button onClick={() => updateLoggedIn(false)}>LogOut</button>
      )}
    </div>
  );
};
export default Header;
