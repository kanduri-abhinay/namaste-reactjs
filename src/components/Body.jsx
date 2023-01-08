import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="cards-container">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};
export default Body;
