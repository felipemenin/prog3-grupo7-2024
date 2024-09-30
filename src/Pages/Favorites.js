import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import Loader from "../Components/Loader/Loader";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos !== null) {
      const parsedFavoritos = JSON.parse(favoritos);
      Promise.all(
        parsedFavoritos.map((id) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=709280f7a436019eb21b72bc1317fa78`
          ).then((response) => response.json())
        )
      )
        .then((data) =>
          setTimeout(() => {
            this.setState({
              movies: data,
              isLoading: false,
            });
          }, 500)
        )
        .catch((e) => console.log(e));
    }
  }
  render() {
    return (
      <>
        <section>
          {!this.state.isLoading ? (
            <>
              {this.state.movies.length > 0 ? (
                <>
                  <h2>Tus peliculas favoritas</h2>
                  <MoviesGrid movies={this.state.movies} />
                </>
              ) : (
                <h2>No tienes peliculas favoritas</h2>
              )}
            </>
          ) : (
            <Loader />
          )}
        </section>
      </>
    );
  }
}

export default Favorites;
