import React, { useState } from 'react';  
import RestaurantCard from "./RestaurantCard";
import { resObj } from '../Utils/mockData';

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resObj.restaurants);

  const filterTopRated = () => {
    const filtered = filteredRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  };

  const filterItalian = () => {
    const filtered = filteredRestaurants.filter(
      (restaurant) =>
        Array.isArray(restaurant.info.cuisines) &&
        restaurant.info.cuisines.includes("Italian")
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="body">
      <div className="search">
        <button 
          className="filter-btn" 
          onClick={filterTopRated}
        >
          Top rated restaurants
        </button>
        <button 
          className="filter-btn" 
          onClick={filterItalian}
        >
          Italian restaurants
        </button>
      </div>
      <div className="res-container"> 
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
