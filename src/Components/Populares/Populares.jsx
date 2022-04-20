import React, { useContext } from "react";
import "./Populares.css";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MisPeliculasContext } from "../../App";
function Populares() {
  const { list, setList, popular, misPeliculas, movieList } =
    useContext(MisPeliculasContext);
  function showList() {
    setList(!list);
  }

  return (
    <div className="populares">
      <div className="title">
        <p>
          <a onClick={showList}>
            Ver:
            <b>
              {popular ? "Populares" : "Mis Peliculas"}
              <KeyboardArrowDownIcon />
            </b>
          </a>
        </p>
        {list && <Dropdown />}
      </div>

      <div className="movie-list">
        {popular ? (
          <>
            {movieList &&
              movieList
                .slice(0, 4)
                .map((val, key) => (
                  <Card
                    imagen={`https://image.tmdb.org/t/p/w300/${val.backdrop_path}`}
                    title={val.original_title}
                    rate={val.vote_average}
                    fecha={val.release_date}
                    popular={true}
                    key={key}
                  />
                ))}
          </>
        ) : (
          <>
            {misPeliculas.map((val, key) => (
              <Card key={key} imagen={val.imagen} title={val.titulo} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Populares;
