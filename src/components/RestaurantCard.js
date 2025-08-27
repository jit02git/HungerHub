import {LOGO_URL} from '../Utils/constants'

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, areaName, avgRating, costForTwo, sla } = resData.info;
  return (
    <div className="res-card">
      <img src={`${LOGO_URL}${cloudinaryImageId}`} alt={name} />
      <h3>{name}</h3>
      <p>{areaName}</p>
      <p>Rating: {avgRating}</p>
      <p>Price: {costForTwo}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;