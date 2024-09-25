import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import Loading from "../Components/Loading/Loading";

class ViewAllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      Movies: [],
      numeroPag: 2,
      filterValue: "",
      moviesFiltrado: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.name}?api_key=709280f7a436019eb21b72bc1317fa78`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Movies: data.results,
          moviesFiltrado: data.results,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  handleViewMore() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.name}?api_key=709280f7a436019eb21b72bc1317fa78&anguage=en-US&page=${this.state.numeroPag}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Movies: this.state.Movies.concat(data.results),
          moviesFiltrado: this.state.moviesFiltrado.concat(data.results),
          numeroPag: this.state.numeroPag + 1,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleResetFilter() {
    this.setState({
      filterValue: "",
      moviesFiltrado: this.state.Movies,
    });
  }
  handleFilter(e) {
    const userValue = e.target.value;
    this.setState({
      filterValue: userValue,
      moviesFiltrado: this.state.Movies.filter((movie) =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
      ),
    });
  }

  render() {
    const peliculas = this.state.moviesFiltrado;
    return (
      <>
        <input
          type="text"
          value={this.state.filterValue}
          onChange={(e) => this.handleFilter(e)}
        />
        <button onClick={() => this.handleResetFilter()}> Reset filter</button>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <h2>
              Todas las películas{" "}
              {this.state.name === "popular" ? "populares" : "en cartelera"}
            </h2>
            <MoviesGrid movies={peliculas} />
            <button onClick={() => this.handleViewMore()}>Ver más</button>
          </>
        )}
      </>
    );
  }
}

export default ViewAllMovies;
