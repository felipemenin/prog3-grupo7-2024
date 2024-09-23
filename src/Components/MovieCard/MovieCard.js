import { Component } from "react";
import "./MovieCard.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      overview: this.props.overview,
      id: this.props.id,
      poster_path: this.props.poster_path,
      viewMore: true,
      esFavorito: false,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("favoritos") != null) {
      if (
        JSON.parse(localStorage.getItem("favoritos").includes(this.state.id))
      ) {
        this.setState({
          esFavorito: true,
        });
      }
    }
  }
  handleViewMore() {
    this.setState({
      viewMore: !this.state.viewMore,
    });
  }
  handleFavorite() {
    this.setState({
      esFavorito: !this.state.esFavorito,
    });
    if (this.state.esFavorito !== true) {
      if (localStorage.getItem("favoritos") === null) {
        localStorage.setItem("favoritos", JSON.stringify([this.state.id]));
      } else {
        const stringStorage = localStorage.getItem("favoritos");
        const favs = JSON.parse(stringStorage);
        favs.push(this.state.id);
        console.log(favs);
        const favs3 = JSON.stringify(favs);
        localStorage.setItem("favoritos", favs3);
      }
    } else {
      const stringStorage = localStorage.getItem("favoritos");
      const favs = JSON.parse(stringStorage);
      const favs2 = favs.filter(id => id !== this.state.id);
      const favs3 = JSON.stringify(favs2);
      localStorage.setItem("favoritos", favs3);
    }
  }

  render() {
    const { title, overview, id, poster_path } = this.state;
    const { esFavorito } = this.state;
    return (
      <>
        <div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          <h4>{title}</h4>
          <p className={this.state.viewMore ? "hide" : "show"}>{overview}</p>
          {
            <button onClick={() => this.handleViewMore()}>
              {this.state.viewMore
                ? "Mostrar descripción"
                : "Ocultar descripción"}{" "}
            </button>
          }
          <br />
          <a className="texto" href={`/movie/${id}`}>
            Ver detalle de pelicula
          </a>
          <br />
          <span onClick={() => this.handleFavorite()}>
            {esFavorito ? (
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
      </>
    );
  }
}
export default MovieCard;
