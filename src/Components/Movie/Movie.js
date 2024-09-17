import {Link} from "react-router-dom"
import {Component} from 'react'
import "./Movie.css"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          overview: this.props.overview,
          id: this.props.id,
          poster_path: this.props.poster_path,
          viewMore: true,
          esFavorito: false

        };
     }
      handleViewMore () {
        this.setState(
            {
                viewMore : !this.state.viewMore
            }
        )
    }
    handleFavorite () {
      this.setState(
          {
              esFavorito : !this.state.esFavorito
          }
      )
  }
    

    render () {
        const { title, overview, id, poster_path} = this.state
        const {esFavorito } = this.state;
            return (
<>
<div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          <h4>{title}</h4>
          <p className={this.state.viewMore ? "hide" : "show" }>{overview}</p>
          {<button onClick={()=> this.handleViewMore()}>{this.state.viewMore ? "Mostrar descripción" : "Ocultar descripción"} </button>}
        <br />
          <Link to={`/movie/id/${id}`}>Ver detalle de pelicula</Link><br />
          <span onClick={()=>this.handleFavorite()}>
          {esFavorito ?  <FaHeart color="red" /> : <FaRegHeart />}
        </span>
          



        
         

</div>

</>    );
    };
    }
    export default Movie;
