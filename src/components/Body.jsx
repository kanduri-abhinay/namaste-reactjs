import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const filterData = (searchText, data) => {
  return data.filter((item) => item.data.name.toLowerCase().includes(searchText.toLowerCase()));
};
const Body = () => {
  const [searchText, updateSearchText] = useState("");
  const [restaurants, updateRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="search-input"
          onChange={(e) => {
            updateSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={(e) => {
            updateRestaurants(filterData(searchText, restaurantList));
          }}
        >
          Search
        </button>
      </div>
      <div className="cards-container">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
