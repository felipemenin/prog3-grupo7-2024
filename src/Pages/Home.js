import { Component } from "react";
import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import SearchForm from "../Components/SearchForm/SearchForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      carteleraMovies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=709280f7a436019eb21b72bc1317fa78"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ popularMovies: data.results });
      })
      .catch((e) => {
        console.log(e);
      });
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=709280f7a436019eb21b72bc1317fa78"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ carteleraMovies: data.results });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const fivepopularMovies = this.state.popularMovies.slice(0, 5);
    const fiveCarteleraMovies = this.state.carteleraMovies.slice(0, 5);
    return (
      <>
        <main>
          <SearchForm />
          <h2>Peliculas populares</h2>

          <MoviesGrid movies={fiveCarteleraMovies} />

          <button>
            <a
              href="/viewall/popular"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ver todas
            </a>
          </button>

          <h2>Peliculas en cartelera</h2>
          <section className="movie-container">
            <MoviesGrid movies={fivepopularMovies} />
          </section>
          <button>
            <a
              href="/viewall/now_playing"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ver todas
            </a>
          </button>
        </main>
      </>
    );
  }
}

export default Home;
