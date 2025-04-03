import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'



const App = () => {
  const Fire = new URL( './assets/fire.png', import.meta.url ).href; 
  // const Star = new URL( '../../assets/glowing-star.png', import.meta.url ).href; 
  const Star = new URL( './assets/star.png', import.meta.url ).href;
  const Party = new URL( './assets/partying-face.png', import.meta.url ).href; 
  return (
    <div className='app'>
      <Navbar/>
      <MovieList type="popular" title="Popular" emoji={Fire}/>
      <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party}/>
  
    </div>
  )
}

export default App