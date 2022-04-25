import React, { createContext, useState } from "react";

const liteflixContext = createContext();
export function LiteflixProvider({ children }) {
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
  return (
    <liteflixContext.Provider
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
        setPrincipal,
        setMovieList,
        setIsMobile,
      }}
    >
      {children}
    </liteflixContext.Provider>
  );
}

export default liteflixContext;
