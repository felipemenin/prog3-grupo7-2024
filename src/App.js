import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ViewAllMovies from "./Pages/ViewAllMovies";
import { Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Header />
    
    <Route path= "/favorites" component = {ViewAllMovies} />

    <Footer />
    </>
  );
}

export default App;
