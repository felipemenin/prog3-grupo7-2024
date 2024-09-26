import { Component } from "react";
import "./MovieCard.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
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
      const favs2 = favs.filter((id) => id !== this.state.id);
      const favs3 = JSON.stringify(favs2);
      localStorage.setItem("favoritos", favs3);
    }
  }

  render() {
    const { title, overview, id, poster_path } = this.props;
    const { esFavorito } = this.state;
    return (
      <>
        <article href={`/movie/${id}`} className="movie-card">
          <Link className="titulo" to={`/movie/${id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
            <h4>{title}</h4>
          </Link>
          <p className={this.state.viewMore ? "hide" : "show"}>{overview}</p>
          {
            <button
              className="verDescripcion"
              onClick={() => this.handleViewMore()}
            >
              {this.state.viewMore
                ? "Mostrar descripción"
                : "Ocultar descripción"}{" "}
            </button>
          }
          <span onClick={() => this.handleFavorite()}>
            {esFavorito ? (
              <p>
                <FaHeart color="red" /> Quitar de favoritos{" "}
              </p>
            ) : (
              <p>
                <FaRegHeart /> Agregar a favoritos{" "}
              </p>
            )}
          </span>
        </article>
      </>
    );
  }
}
export default MovieCard;
