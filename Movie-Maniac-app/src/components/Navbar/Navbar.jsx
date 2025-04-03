import React from 'react';
import './Navbar.css';
// import Fire from "../assets/fire.png";
// import Fire from '../../assets/fire.png';
const Navbar = () => {
  const Fire = new URL( '../../assets/fire.png', import.meta.url ).href; 
  const Star = new URL( '../../assets/glowing-star.png', import.meta.url ).href; 
  const Party = new URL( '../../assets/partying-face.png', import.meta.url ).href; 
  
  return (
    <nav className='navbar'>
      <h1>MovieManiac</h1>
      <div className="navbar_links">
      <a href="#popular" rel="noopener noreferrer">Popular <img src={Fire} alt="Popular-img"className='navbar_emoji' /></a>
        <a href="#top_rated" rel="noopener noreferrer">Top Rated<img src={Star} alt="Top-rated-img"className='navbar_emoji' /></a>
        <a href="#upcoming" rel="noopener noreferrer">Upcoming<img src={Party} alt="upcoming-emoji"className='navbar_emoji' /></a>
      </div>
    </nav>
  )
}

export default Navbar