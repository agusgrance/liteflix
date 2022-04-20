import React, { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import LinearProgress from "@mui/material/LinearProgress";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import "./Upload.css";
import { MisPeliculasContext } from "../../App";

function Upload() {
  const { banner, setBanner } = useContext(MisPeliculasContext);
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

  const images = files.map(
    (file) => file.path
    // <div key={file.name}>
    //   <div>
    //     <img src={file.preview} style={{ width: "200px" }} alt="preview" />
    //   </div>
    // </div>
  );

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
            Agregá un archivo o arrastralo y soltalo aquí
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;
