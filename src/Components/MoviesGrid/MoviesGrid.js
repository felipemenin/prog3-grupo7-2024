import { Component } from "react";
import Movie from "../Movie/Movie";
import "./MoviesGrid.css"

class MoviesGrid extends Component {
  constructor() {
    super();
    this.state = {
    movies: [],
    numero: 2
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=709280f7a436019eb21b72bc1317fa78")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.results });
        console.log(data.results)})
      .catch((e) => {
        console.log(e);
      });
  }
  handleMoreMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.numero}?api_key=709280f7a436019eb21b72bc1317fa78`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: this.state.movies.concat(data.results),
          numero: this.state.numero + 1
        });
        console.log(data.results);
        console.log(this.state.numero);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  render() {
    const {movies}= this.state
    return (<>
    <section className="movie-container">
      
      {movies.length>0 &&  movies.map((movie, idx) => (
          <Movie
            key={idx}
            title={movie.title}
            poster_path={movie.poster_path}
            id= {movie.id}
            overview= {movie.overview}
          />
        ))}
    </section>
    <button onClick={()=> this.handleMoreMovies()}>Mas peliculas</button>
      </>
  )}
}

export default MoviesGrid;
