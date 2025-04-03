import React, { useEffect, useState } from 'react'
import _ from "lodash"


import './MovieList.css'
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';


const MovieList = ({type, title, emoji}) => {
    const [movies, setMovies] = useState([])
    const [ minRating, setminRating ] = useState( 0 )
    const [FilterMovies, setFilterMovies] = useState([])
    const [sort, setSort] = useState({
        by: "defailt",
        order: "asc"
    })
    useEffect(() => {
        fetchMovis()
    }, []);

    useEffect(()=>{
        if (sort.by !== "default"){
            // @ts-ignore
            const sortedMovies = _.orderBy(FilterMovies, [sort.by], [sort.order])
            // @ts-ignore
            setFilterMovies(sortedMovies)
        }

    }, [sort])
    
    
 
    const fetchMovis = async () =>
    {
        try
        {
            const response = await fetch( `https://api.themoviedb.org/3/movie/${type}?api_key=13036f98334679d489d359ad4d5856cc`);
            const data = await response.json();

            console.log( "Full API Response:", data ); // Check structure of response
            console.log( "Results Array:", data.results ); // Check if results exist

            if ( data && data.results )
            {
                setMovies( data.results ); 
                setFilterMovies( data.results ); 
            } else
            {
                console.error( "API response does not contain results." );
                setMovies( [] ); // Prevents errors if results are missing
            }
        } catch ( error )
        {
            console.error( "Error fetching movies:", error );
        }
    };

    const handleFilter = (rating) =>{
        if (rating === minRating){
            setminRating(0)
            setFilterMovies(movies)}
        else{
            setminRating( rating )
        
            // @ts-ignore
            const filtered = movies.filter(movie => movie.vote_average >= rating)
          
            // @ts-ignore
            setFilterMovies(filtered)
        
        }

    }

    const handleSort = e => {
        const {name, value} = e.target;
        setSort(prev => ({...prev, [name] : value})
        )
      
    }
 
   

  return (
      <section className='movie_list' id={type}>
        <header className='movie_list_header'>
            <h2 className='align_center movie_list_heading'>{title} Movies<img src={emoji} alt={`${emoji}-icon`} className='navbar_emoji' /></h2>
            <div className="align_center movie_list_fs">
                  <FilterGroup minRating={ minRating } onRatingClick={ handleFilter } ratings= {[8,7,6]} />
                  <select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by}>
                      <option value="default">Sort By</option>
                      <option value="release_date">Date</option>
                      <option value="vote_average">Rating</option>
                  </select>
                  <select name="order" id="" className="movie_sorting" onChange={handleSort} value = {sort.order}>
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                  </select>
            </div>
            
        </header>
          <div className="movie_cards">
             {
                  FilterMovies.map( movie =>
                  {
                      // @ts-ignore
                      return <MovieCard key={ movie.id } movie={ movie } />
                  } )
             }
          </div>

    </section>
  )
}

export default MovieList