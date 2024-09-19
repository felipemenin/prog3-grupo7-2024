import { Switch, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ViewAllMovies from "./Pages/ViewAllMovies";
import { Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Header />
    <Switch>
     <Route path="/" exaxt component={Home}/>
     <Route path="/viewall/:name" component={ViewAllMovies}/>
     <Route path="/pelicula/:id" component={Detail}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
