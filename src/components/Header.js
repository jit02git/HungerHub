
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://imgs.search.brave.com/R1iP8130WaxJit06hw1uxeUdZogrAGuCJIjqfAYowQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/Ni8zMC9tb2Rlcm4t/YnVyZ2VyLWxldHRl/ci1lLWxvZ28tdmVj/dG9yLTUxMzk0NjMw/LmpwZw"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
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

export default Header;