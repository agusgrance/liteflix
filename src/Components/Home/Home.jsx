import React, { useState, useContext } from "react";
import Populares from "../Populares/Populares";
import "./Home.css";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CheckIcon from "@mui/icons-material/Check";
import liteflixContext from "../../Context/LiteflixContext";

function Home({ mobile }) {
  const { isMobile } = useContext(liteflixContext);
  const [select, setSelect] = useState(false);
  return (
    <>
      <div className="movie-banner" style={mobile}>
        <div className="movie-container">
          <h6 className="banner-title">
            Original de <b> Liteflix </b>
          </h6>
          <h2 className="title">La Casa de Papel</h2>
        </div>

        <div className="botones">
          <button className="btn play">
            <span>
              <PlayArrowOutlinedIcon />
              Reproducir
            </span>
          </button>
          <button className="btn list" onClick={() => setSelect(!select)}>
            <span>
              {!select ? <AddIcon /> : <CheckIcon />}
              Mi lista
            </span>
          </button>
        </div>
        {isMobile && <div className="fade-mobile"></div>}
      </div>
      <div className="movie-sidebar">
        <Populares />
      </div>
    </>
  );
}

export default Home;
