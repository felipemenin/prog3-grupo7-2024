import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import Loading from "../Components/Loading/Loading";

class SearchResults extends Component {
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
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=33e10f642f640258287c658cad162391`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        <section>
          {this.state.movies.length > 0 ? (
            <>
              <h2>Resultados para "{this.props.location.state.query}"</h2>
              {this.state.isLoading ? (
                <Loading />
              ) : (
                <MoviesGrid movies={this.state.movies} />
              )}
            </>
          ) : (
            <h2>No hay resultados para tu busqueda "{this.props.location.state.query}"</h2>
          )}
        </section>
      </>
    );
  }
}

export default SearchResults;
