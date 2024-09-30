import { Component } from "react";
import "./MovieSingle.css";
import Loader from "../Loader/Loader";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class MovieSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      movie: {},
      esFavorito: false,
      genres: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    if (localStorage.getItem("favoritos") != null) {
      if (
        JSON.parse(localStorage.getItem("favoritos").includes(this.state.id))
      ) {
        this.setState({
          esFavorito: true,
        });
      }
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=709280f7a436019eb21b72bc1317fa78`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          this.setState({ movie: data, genres: data.genres, isLoading: false });
        }, 500);
      })
      .catch((error) => console.log(error));
  }
  handleFavorite() {
    this.setState({
      esFavorito: !this.state.esFavorito,
    });
    if (this.state.esFavorito !== true) {
      if (localStorage.getItem("favoritos") === null) {
        localStorage.setItem(
          "favoritos",
          JSON.stringify([this.state.movie.id])
        );
      } else {
        const stringStorage = localStorage.getItem("favoritos");
        const favs = JSON.parse(stringStorage);
        favs.push(this.state.movie.id);
        const favs3 = JSON.stringify(favs);
        localStorage.setItem("favoritos", favs3);
      }
    } else {
      const stringStorage = localStorage.getItem("favoritos");
      const favs = JSON.parse(stringStorage);
      const favs2 = favs.filter((id) => id !== this.state.id);
      const favs3 = JSON.stringify(favs2);
      localStorage.setItem("favoritos", favs3);
    }
  }

  render() {
    const movie = this.state.movie;
    return (
      <main className="movie-single">
        {!this.state.isLoading ? (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className="movie-img"
              />
              <span onClick={() => this.handleFavorite()}>
                {this.state.esFavorito ? (
                  <p>
                    <FaHeart color="red" /> Quitar de favoritos
                  </p>
                ) : (
                  <p>
                    <FaRegHeart /> Agregar a favoritos
                  </p>
                )}
              </span>
            </div>
            <div className="info">
              <h2>{movie.original_title}</h2>

              <p>Raiting: {movie.popularity}</p>
              <p>Fecha de estreno: {movie.release_date}</p>
              <p>Duracion: {movie.runtime} minutos</p>
              <p>Sinopsis: {movie.overview}</p>
              <p>Genero: </p>
              <ul>
                {this.state.genres.map((genre) => (
                  <li key={genre.id} className="movie-genres">
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
         <Loader/>
        )}
      </main>
    );
  }
}

export default MovieSingle;
