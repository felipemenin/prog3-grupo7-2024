import MovieCard from "../MovieCard/MovieCard";
import "./MoviesGrid.css"

const MoviesGrid = (props) => {
  const {movies} = props
    return (
      <>
      <section className="movie-container">
        {movies.map((movie, idx) => (
        <MovieCard 
        key= {idx}
        title = {movie.title}
        overview= {movie.overview}
        id = {movie.id}
        poster_path = {movie.poster_path}
        />
      ))}
      </section>
       </>
    )}


export default MoviesGrid;
