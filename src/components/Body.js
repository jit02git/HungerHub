import RestaurantCard from "./RestaurantCard";
import {resObj} from '../Utils/mockData'

const Body = () => {
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