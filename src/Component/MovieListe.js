import React from 'react'
import MovieCard from './MovieCard'




const MovieListe = ({movies, name,value}) => {
  console.log(value)
    
  return (
   
    <div className='Produit'key={Math.random()} >{
        movies.filter(el=>el.name.toLowerCase().includes(name.toLowerCase().trim()) &&el.rating>=value).map((movies)=><MovieCard  key={Math.random()} movies={movies}/>)
    }
    
    </div>
  )
}

export default MovieListe