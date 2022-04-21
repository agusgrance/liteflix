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
  const [isMobile, setIsMobile] = useState(false);
  const apiKey = "6f26fd536dd6192ec8a57e94141f8b20";
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    fetchDestacado();
    fetchMovieList();
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  async function fetchDestacado() {
    const getDestacado = await fetch(
      `https://api.themoviedb.org/3/tv/71446?api_key=${apiKey}&language=en-US`
    );
    const destacadoToJson = await getDestacado.json();
    setPrincipal(destacadoToJson);
  }
  async function fetchMovieList() {
    const getData = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    const dataToJson = await getData.json();
    setMovieList(dataToJson.results);
  }

  var appStyle = {
    background: `${
      isMobile
        ? "#242424"
        : principal &&
          `url(https://image.tmdb.org/t/p/original/${principal.backdrop_path}) center center / cover no-repeat`
    }`,
  };
  var mobileStyle = {
    background: `${
      !principal
        ? "none"
        : isMobile &&
          `url(https://image.tmdb.org/t/p/original/${principal.backdrop_path}) center center / cover no-repeat`
    }`,
  };
  return (
    <div className="App" style={appStyle}>
      <MisPeliculasContext.Provider
        value={{
          isMobile,
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
          <Home mobile={mobileStyle} />
        </div>
      </MisPeliculasContext.Provider>
    </div>
  );
}

export default App;
