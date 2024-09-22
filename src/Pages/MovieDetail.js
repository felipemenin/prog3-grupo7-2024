import MovieSingle from "../Components/MovieSingle/MoviSingle";

const MovieDetail = (props) => {
  console.log(props.movie);
  return (
    <>
      <MovieSingle id={props.match.params.id} />
    </>
  );
};

export default MovieDetail;
