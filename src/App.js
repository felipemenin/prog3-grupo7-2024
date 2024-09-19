import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ViewAllMovies from "./Pages/ViewAllMovies";


function App() {
  return (
    <>
    <Header />
    <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/viewall/:name" component={ViewAllMovies}/>
     <Route path="/movie/:id" />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
