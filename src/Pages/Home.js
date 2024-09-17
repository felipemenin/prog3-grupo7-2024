import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import SearchForm from "../Components/SearchForm/SearchForm";

const Home = () => {
  return (
    <>
      <h1>App</h1>
      <SearchForm/>

      <main>
        <MoviesGrid/>
      </main>
    </>
  );
};

export default Home;