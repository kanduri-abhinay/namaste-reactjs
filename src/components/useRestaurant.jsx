import { useState,useEffect } from "react";
export default function useRestaurant(resId) {
  const [restaurant, setRestaurant] = useState(null);
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
  return restaurant;
}
