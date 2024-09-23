import { Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";

import Home from "./Pages/Home";
import ViewAllMovies from "./Pages/ViewAllMovies";
import MovieDetail from "./Pages/MovieDetail";
import SearchResults from "./Pages/SearchResults";
import Favorites from "./Pages/Favorites";
import NotFound from "./Components/NotFound/NotFound";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/viewall/:name" component={ViewAllMovies} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/search" component={SearchResults}/>
        <Route path="/favorites" component={Favorites}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
