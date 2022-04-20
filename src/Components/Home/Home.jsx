import React, { useState } from "react";
import Populares from "../Populares/Populares";
import "./Home.css";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CheckIcon from "@mui/icons-material/Check";
function Home() {
  const [select, setSelect] = useState(false);
  return (
    <>
      <div className="movie-banner">
        <h6 className="">
          Original de <b> Liteflix </b>
        </h6>
        <h2 className="title">La Casa de Papel</h2>
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
      </div>
      <div className="movie-sidebar">
        <Populares />
      </div>
    </>
  );
}

export default Home;
