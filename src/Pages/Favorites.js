import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import Loading from "../Components/Loading/Loading";

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
        .then((data) => this.setState({
           movies: data,
           isLoading: false
           }))
        .catch((e) => console.log(e));
    }
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <h1>Tus peliculas favoritas</h1>
            <MoviesGrid movies={this.state.movies} />
          </>
        )}
      </>
    );
  }
}

export default Favorites;
