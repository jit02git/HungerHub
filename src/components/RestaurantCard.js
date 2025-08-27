const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, areaName, avgRating, costForTwo, sla } = resData.info;
  return (
    <div className="res-card">
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
      <h3>{name}</h3>
      <p>{areaName}</p>
      <p>Rating: {avgRating}</p>
      <p>Price: {costForTwo}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantCard;