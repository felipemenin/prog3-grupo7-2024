import { Component } from "react";
import Movie from "../Movie/Movie";
import "./MoviesGrid.css"

class MoviesGrid extends Component {
  constructor() {
    super();
    this.state = {
    popularMovies: [],
    carteleraMovies: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=709280f7a436019eb21b72bc1317fa78")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ popularMovies: data.results });
        console.log(data.results)})
      .catch((e) => {
        console.log(e);
      });
      fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=709280f7a436019eb21b72bc1317fa78")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ carteleraMovies: data.results });
        console.log(data.results)})
      .catch((e) => {
        console.log(e);
      })
      
  }

  
  render() {
    const {popularMovies}= this.state
    const {carteleraMovies}= this.state
    return (<>
        <h2>Peliculas populares</h2>
    <section className="movie-container">
      {popularMovies.length>0 &&  popularMovies.map((movie, idx) => (
          <Movie
            key={idx}
            title={movie.title}
            poster_path={movie.poster_path}
            id= {movie.id}
            overview= {movie.overview}
          />
        ))}
         </section>
         <h2>Peliculas de cartelera</h2>
         <section className="movie-container">
        {carteleraMovies.length>0 &&  carteleraMovies.map((movie, idx) => (
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
