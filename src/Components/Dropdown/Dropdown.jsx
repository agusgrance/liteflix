import React, { useContext } from "react";
import "./Dropdown.css";
import CheckIcon from "@mui/icons-material/Check";
import liteflixContext from "../../Context/LiteflixContext";
function Dropdown() {
  const { popular, setPopular } = useContext(liteflixContext);
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
