import { Component } from "react";
import "./MovieSingle.css";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class MovieSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      movie: {},
      esFavorito: false,
    };
  }

  componentDidMount() {
    if(localStorage.getItem("favoritos") != null){
      if(JSON.parse(localStorage.getItem("favoritos").includes(this.state.id))){
        this.setState({
          esFavorito: true
        })
      }

    }
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=709280f7a436019eb21b72bc1317fa78`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movie: data });
      })
      .catch((error) => console.log(error));
  }
  handleFavorite() {
    this.setState({
      esFavorito: !this.state.esFavorito,
    })
    if(this.state.esFavorito !== true){
      if(localStorage.getItem("favoritos") === null){
        localStorage.setItem("favoritos", JSON.stringify([this.state.movie.id]))
      }else{
        const stringStorage = localStorage.getItem("favoritos");
        const favs = JSON.parse(stringStorage)
        favs.push(this.state.movie.id)
        const favs3 = JSON.stringify(favs)
        localStorage.setItem("favoritos", favs3)
      }
    }else{
      const stringStorage = localStorage.getItem("favoritos");
      const favs = JSON.parse(stringStorage)
      favs.pop(this.state.movie.id)
      const favs3 = JSON.stringify(favs)
      localStorage.setItem("favoritos", favs3)
    }

  }

  render() {
    const movie = this.state.movie;
    console.log(this.state.movie.genres)
    return (
      <main className="movie-single">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <span onClick={() => this.handleFavorite()}>
            {this.state.esFavorito ? (
              <p>
                {" "}
                <FaHeart color="red" /> Quitar de favoritos{" "}
              </p>
            ) : (
              <p>
                {" "}
                <FaRegHeart /> Agregar a favoritos{" "}
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
        </div>
      </main>
    );
  }
}

export default MovieSingle;
