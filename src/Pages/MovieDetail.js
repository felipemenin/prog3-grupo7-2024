import { Component } from "react";
import MovieSingle from "../Components/MovieSingle/MoviSingle";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }
  render() {
    return (
      <>
        <MovieSingle id={this.state.id} />
      </>
    );
  }
}

export default MovieDetail;
