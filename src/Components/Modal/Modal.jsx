import React, { useState, useContext } from "react";
import Upload from "./Upload";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import liteflixContext from "../../Context/LiteflixContext";

import Liteflix from "../../Assets/Img/LITEFLIX.png";
function Modal() {
  const [movie, setMovie] = useState(false);

  const {
    pelicula,
    setPelicula,
    setModal,
    setMisPeliculas,
    banner,
    misPeliculas,
    setBanner,
  } = useContext(liteflixContext);
  const handleChage = (e) => {
    setPelicula(e.target.value);
  };
  function handleUpload() {
    if (pelicula != "" && banner != "") {
      setMovie(true);
      let obj = { titulo: pelicula, imagen: banner };
      localStorage.setItem("data", JSON.stringify(obj));

      setMisPeliculas([...misPeliculas, obj]);
    }
  }
  function handleFinish() {
    setModal(false);
    setPelicula("");
    setBanner("");
  }
  return (
    <div className="modal">
      <div className="close" onClick={() => handleFinish()}>
        <CloseIcon />
      </div>
      {!movie ? (
        <div className="modal-section">
          <div className="modal-title">
            <h4>Agregar Pelicula</h4>
          </div>
          <div className="modal-add">
            <Upload />
          </div>
          <div className="add-title">
            <input type="text" placeholder="Titulo" onChange={handleChage} />
          </div>

          <button
            className={
              pelicula != "" && banner != "" ? "btn add " : "btn add disabled"
            }
            onClick={() => handleUpload()}
          >
            subir película
          </button>
        </div>
      ) : (
        <div className="modal-section success">
          <div className="modal-title">
            <div>
              <img src={Liteflix} />
            </div>
          </div>
          <h4>¡Felicitaciones!</h4>
          <h5>{pelicula} fue correctamente subida.</h5>

          <button className="btn add" onClick={() => handleFinish()}>
            ir a home
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
