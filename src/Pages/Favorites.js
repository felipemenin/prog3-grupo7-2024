import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos !== null) {
      const parsedFavoritos = JSON.parse(favoritos);
      Promise.all(
        parsedFavoritos.map((id) => 
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=709280f7a436019eb21b72bc1317fa78`
          )
            .then((response) => response.json())
            .then((data) => 
              this.setState({ movies: [...this.state.movies, data] }, ()=>console.log('movies', this.state.movies))
            )
            .catch((e) => console.log(e))
        )
      );
    }
  }
  render() {
    return (
      <>
        <h1>Tus peliculas favoritas </h1>
        <MoviesGrid movies={this.state.movies} />
      </>
    );
  }
}

export default Favorites;
