import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
export const MisPeliculasContext = createContext();
function App() {
  const [misPeliculas, setMisPeliculas] = useState([]);
  const [modal, setModal] = useState(false);
  const [banner, setBanner] = useState("");
  const [pelicula, setPelicula] = useState();
  const [popular, setPopular] = useState(true);
  const [list, setList] = useState(false);
  const [principal, setPrincipal] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    fetchDestacado();
    fetchMovieList();
  }, []);
  async function fetchDestacado() {
    //alimentarse de api
    const getDestacado = await fetch(
      "https://api.themoviedb.org/3/tv/71446?api_key=6f26fd536dd6192ec8a57e94141f8b20&language=en-US"
    );
    const destacadoToJson = await getDestacado.json();
    setPrincipal(destacadoToJson);
  }

  async function fetchMovieList() {
    //alimentarse de api
    const getData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
    );
    const dataToJson = await getData.json();
    setMovieList(dataToJson.results);
  }

  var appStyle = {
    background: `${
      principal
        ? `url(https://image.tmdb.org/t/p/original/${principal.backdrop_path}) center center / cover no-repeat`
        : `white`
    }`,
  };
  return (
    <div className="App" style={appStyle}>
      <MisPeliculasContext.Provider
        value={{
          sidebar,
          setSidebar,
          principal,
          movieList,
          list,
          setList,
          popular,
          setPopular,
          pelicula,
          setPelicula,
          misPeliculas,
          setMisPeliculas,
          modal,
          setModal,
          banner,
          setBanner,
        }}
      >
        <header>
          <Nav />
        </header>
        <div className="container">
          <Home />
        </div>
      </MisPeliculasContext.Provider>
    </div>
  );
}

export default App;
