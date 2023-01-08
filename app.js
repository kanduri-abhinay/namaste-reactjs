import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import RestaurantList from "./data";
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
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  console.log(name);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3 className="ellipsis">{name}</h3>
      <h4 className="ellipsis">{cuisines.join(" , ")}</h4>
      <h5>{avgRating} Rating</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="cards-container">
      {RestaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
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
