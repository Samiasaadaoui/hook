import { useState } from 'react';
import './App.css';
import Navigation from './Component/Navigation';
import MovieListe from './Component/MovieListe';
import {moviesData} from './Data';
import AddMovie from './Component/AddMovie'



function App() {
const [movies , setMovies] = useState (moviesData)
const [name,setName] = useState ("")
const [value, setValue] =useState(0)

  return (
    <div className="App">
    
    <Navigation setName={setName}  value={value} setValue={setValue}/>
    <MovieListe movies={movies} name ={name} value={value}/>
    <AddMovie setMovies={setMovies} movies={movies}/>
    
    
    
      
    </div>
  );
}

export default App;
