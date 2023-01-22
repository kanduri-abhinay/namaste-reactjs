import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantDetails = () => {
  const { resId } = useParams();
  const [restaurant,setRestaurant]=useState(null);
  async function getRestaurantDetails() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.446746584023174&lng=78.36301356554031&menuId=" +
        resId
    );
    data = await data.json();
    setRestaurant(data?.data);
  }
  useEffect(() => {
    getRestaurantDetails();
  }, []);
if(!restaurant)
{
    return <Shimmer/>
}
  return (
    <div>
      <div className="rest-details">
        <img src={IMG_CDN_URL+restaurant["cloudinaryImageId"]}/>
        <h1>{restaurant["name"]}</h1>
        <h2>{restaurant["avgRating"]}</h2>
      </div>
      <div className="rest-menu">
        <ul className="menu">{Object.values(restaurant.menu.items).map(item=><li key={item["id"]}>{item["name"]}</li>)}</ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
