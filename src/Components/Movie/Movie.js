import {Link} from "react-router-dom"
import {Component} from 'react'
import "./Movie.css"

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: this.props.title,
          overview: this.props.overview,
          id: this.props.id,
          poster_path: this.props.poster_path,
          viewMore: true

        };
     }
      handleViewMore () {
        this.setState(
            {
                viewMore : !this.state.viewMore
            }
        )
    }
    

    render () {
        const { title, overview, id, poster_path} = this.state
            return (
<>
<div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          <h4>{title}</h4>
          <p className={this.state.viewMore ? "hide" : "show" }>{overview}</p>
          {<button onClick={()=> this.handleViewMore()}>{this.state.viewMore ? "Mostrar descripción" : "Ocultar descripción"} </button>}
        <br />
          <Link to={`/movie/id/${id}`}>Ver detalle de pelicula</Link><br />
          



        
         

</div>

</>    );
    };
    }
    export default Movie;
