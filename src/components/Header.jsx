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
  export default Header;