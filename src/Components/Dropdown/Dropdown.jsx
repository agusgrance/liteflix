import React, { useContext } from "react";
import "./Dropdown.css";
import CheckIcon from "@mui/icons-material/Check";
import { MisPeliculasContext } from "../../App";
function Dropdown() {
  const { popular, setPopular } = useContext(MisPeliculasContext);
  return (
    <div className="dropdown">
      <ul>
        <li
          onClick={() => {
            setPopular(true);
          }}
        >
          Populares {popular && <CheckIcon />}
        </li>
        <li
          onClick={() => {
            setPopular(false);
          }}
        >
          Mis Peliculas {!popular && <CheckIcon />}
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
