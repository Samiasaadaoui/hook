import React from 'react'
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';


const MovieCard = ({movies}) => {
  return (
    <div >
    <Card style={{ width: '18rem' , marginBottom:"50px" }}>
      <Card.Img variant="top" src={movies.image} style={{height:'450px'}} />
      <Card.Body>
        <Card.Title>{movies.name}</Card.Title>
        <Card.Text>
        {movies.description}
        </Card.Text>
        <Rating name="half-rating-read" defaultValue={movies.rating} precision={0.5} readOnly />
      </Card.Body>
    </Card>
    </div>
  );
}

  
export default MovieCard