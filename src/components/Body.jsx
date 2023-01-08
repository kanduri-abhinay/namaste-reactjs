import RestaurantList from "../data";
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
export default Body;