import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./useRestaurant";
const RestaurantDetails = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="rest-details">
        <img src={IMG_CDN_URL + restaurant["cloudinaryImageId"]} />
        <h1>{restaurant["name"]}</h1>
        <h2>{restaurant["avgRating"]}</h2>
      </div>
      <div className="rest-menu">
        <ul className="menu">
          {Object.values(restaurant.menu.items).map((item) => (
            <li key={item["id"]}>{item["name"]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
