import RestaurantCard from "./RestaurantCard";

const Body = ({ resObj } ) => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container"> 
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;