import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=33e10f642f640258287c658cad162391`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          movies: data.results,
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
          <h2>Resultados para "{this.props.location.state.query}"</h2>
          <MoviesGrid movies={this.state.movies} />
        </section>
      </>
    );
  }
}

export default SearchResults;
