import './App.css';

const Header = () => {
  return (
    <div className="header">
      <div className='logo-container'>
        <img src="https://imgs.search.brave.com/R1iP8130WaxJit06hw1uxeUdZogrAGuCJIjqfAYowQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/Ni8zMC9tb2Rlcm4t/YnVyZ2VyLWxldHRl/ci1lLWxvZ28tdmVj/dG9yLTUxMzk0NjMw/LmpwZw" alt="Logo" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  width: '200px',
  height: '300px',
  border: '1px solid black',
  backgroundColor: 'lightgrey'
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img class="sc-bXCLTC jRHowI" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5012151f-f70c-4b31-ae59-d57aeb4273ac_87259.JPG" alt="KFC"/>
      <h3>KFC Foods</h3>
      <p>Chandigarh</p>
      <p>Rating: 4.5</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className='search'>Search</div>
        <div className='res-container'>
          <RestaurantCard />
        </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="App">
      <Header />
      <Body /> 
    </div>
  );
}

export default AppLayout; 
