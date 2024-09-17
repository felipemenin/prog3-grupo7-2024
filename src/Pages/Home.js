import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import SearchForm from "../Components/SearchForm/SearchForm";

const Home = () => {
  return (
    <>
      <h1>App</h1>
      <SearchForm/>

      <main>
        <h2>Peliculas Populares</h2>
        <MoviesGrid/>
      </main>
    </>
  );
};

export default Home;