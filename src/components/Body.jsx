import { useEffect, useState } from "react";
// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const filterData = (searchText, data) => {
  return data.filter((item) =>
    item?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};
const Body = () => {
  const [restaurantList, setRestaurantList] = useState();
  const [searchText, updateSearchText] = useState("");
  const [restaurants, updateRestaurants] = useState([]);
  useEffect(() => {
    getRestaurantData();
  }, []);
  async function getRestaurantData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.423714499736413&lng=78.33982184529305&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(data?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
    updateRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  }
  return restaurantList ? (
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
      {restaurants.length == 0 ? (
        <h1> No restaurants found</h1>
      ) : (
        <div className="cards-container">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            );
          })}
        </div>
      )}
    </>
  ) : (
    <Shimmer />
  );
};
export default Body;
