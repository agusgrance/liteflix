import React, { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import LinearProgress from "@mui/material/LinearProgress";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "./Upload.css";
import liteflixContext from "../../Context/LiteflixContext";

function Upload() {
  const { setBanner, isMobile } = useContext(liteflixContext);
  const [files, setFiles] = useState([]);
  const [load, setLoad] = useState(false);
  const [porcent, setPorcent] = useState(0);
  const [error, setError] = useState(false);
  const [finish, setFinish] = useState(false);

  const onDrop = useCallback(
    (acceptedFile, rejectedFile) => {
      acceptedFile.forEach((e) => {
        const reader = new FileReader();

        reader.onprogress = (e) =>
          setPorcent(Math.round((e.loaded * 100) / e.total));

        reader.onload = (e) => {
          setBanner(e.target.result);
          setLoad(true);
          setFinish(true);
        };
        reader.onerror = () => setError(true);

        reader.readAsDataURL(e);
      });
    },
    [setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="upload">
      {error ? (
        <div className="error">
          ¡ERROR! NO SE PUDO CARGAR LA PELÍCULA
          <LinearProgress
            className="bar-progress"
            variant="determinate"
            value={100}
          />
        </div>
      ) : load && !finish ? (
        <>
          <h5>
            Cargando <b>{porcent} </b>%
          </h5>
          <LinearProgress
            className="bar-progress"
            variant="determinate"
            value={porcent}
          />
        </>
      ) : finish ? (
        <>
          <h5>{porcent} % Cargado</h5>
          <LinearProgress
            className="bar-progress"
            variant="determinate"
            value={porcent}
          />
        </>
      ) : (
        <div className="drop" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            <AttachFileIcon className="drop-icon" />
            {!isMobile
              ? "Agregá un archivo o arrastralo y soltalo aquí"
              : "Agregá un archivo"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;
