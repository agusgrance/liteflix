import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import liteflixContext from "./Context/LiteflixContext";
import { getMovies } from "./Api/api";

function App() {
  const { setPrincipal, setMovieList, setIsMobile, principal, isMobile } =
    useContext(liteflixContext);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    getMovies().then((e) => {
      setPrincipal(e.destacado);
      setMovieList(e.movie.results);
    });
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

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
      <header>
        <Nav />
      </header>
      <div className="container">
        <Home mobile={mobileStyle} />
      </div>
    </div>
  );
}

export default App;
