function Header() {
  return (
    <nav className="nav">
      <img src={"./images/logo.png"} className="logo" />
      <div>
        <input type="text" placeholder="Search.." />
      </div>
      <img src={"./images/user-icon.png"} className="user-icon" />
    </nav>
  );
}
export default Header;
