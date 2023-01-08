import { restaurantList, IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="ellipsis">{name}</h3>
      <h4 className="ellipsis">{cuisines.join(" , ")}</h4>
      <h5>{avgRating} Rating</h5>
    </div>
  );
};
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
