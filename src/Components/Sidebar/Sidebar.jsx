import React, { useContext } from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import { ReactComponent as Notification } from "../../Assets/Svg/Notification.svg";
import { ReactComponent as Perfil } from "../../Assets/Svg/Perfil.svg";
import CloseIcon from "@mui/icons-material/Close";

import liteflixContext from "../../Context/LiteflixContext";
function Sidebar() {
  const { setSidebar, setModal } = useContext(liteflixContext);
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-top">
          <div className="left" onClick={() => setSidebar(false)}>
            <CloseIcon />
          </div>
          <div className="right">
            <div className="menu">
              <Notification />
            </div>
            <div className="menu">
              <Perfil />
            </div>
          </div>
        </div>
        <ul className="menu-items">
          <li>inicio</li>
          <li>series</li>
          <li>peliculas</li>
          <li>agregadas recientemente</li>
          <li>populares</li>
          <li>mis peliculas</li>
          <li>mi lista</li>
          <li onClick={() => setModal(true)}>
            <AddIcon />
            agregar película
          </li>
          <li>cerrar sesión</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
