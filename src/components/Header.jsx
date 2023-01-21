import { useState } from "react";

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
  const [isLoggedIn,updateLoggedIn]=useState(false);
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
      {!isLoggedIn ? (
        <button onClick={() => updateLoggedIn(true)}>LogIn</button>
      ) : (
        <button onClick={() => updateLoggedIn(false)}>LogOut</button>
      )}
    </div>
  );
};
export default Header;
