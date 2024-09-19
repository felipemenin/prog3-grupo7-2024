import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";

class ViewAllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      Movies: [],
      numeroPag: 2,
      filterValue: "",
      moviesFiltrado: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.name}?api_key=709280f7a436019eb21b72bc1317fa78&anguage=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Movies: data.results });
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
        this.setState({ Movies: this.state.Movies.concat(data.results) });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleFilterChange(event) {
    const newFilterValue = event.target.value;
    this.setState({
      filterValue: newFilterValue,
      moviesFiltrado: this.state.Movies.filter((movie) =>
        movie.title.toLowerCase().includes(newFilterValue.toLowerCase())
      ),
    });
    console.log("En la filtracion se encontro", this.state.moviesFiltrado);
  }

  render() {
    return (
      <>
        <h2>Todas las películas {this.state.name === "popular" ? "populares" : "en cartelera"}</h2>
        <input className="input"
          onChange={(event) => this.handleFilterChange(event)}
          value={this.state.filterValue}
        />
        <section className="movie-container">
          <MoviesGrid
            movies={
              this.state.filterValue === ""
                ? this.state.Movies
                : this.state.moviesFiltrado
            }
          />
        </section>
        <button onClick={() => this.handleViewMore()}>Ver más</button>
      </>
    );
  }
}

export default ViewAllMovies;
