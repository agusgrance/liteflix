import React from "react";
import Populares from "../Populares/Populares";
import "./Home.css";
import AddIcon from "@mui/icons-material/Add";
function Home() {
  return (
    <>
      <div className="movie-banner">
        <h6>
          Original de <b> Liteflix </b>
        </h6>
        <h2>La Casa de Papel</h2>
        <div className="Botones">
          <button className="btn play">Reproducir</button>
          <button className="btn list">
            <AddIcon />
            Mi lista
          </button>
        </div>
      </div>
      <div className="movie-sidebar">
        <Populares />
      </div>
    </>
  );
}

export default Home;
