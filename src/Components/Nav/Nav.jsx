import React from "react";
import "./Nav.css";
import Liteflix from "../../Assets/Img/LITEFLIX.png";
import { ReactComponent as Menu } from "../../Assets/Svg/Menu.svg";
import { ReactComponent as Notification } from "../../Assets/Svg/Notification.svg";
import { ReactComponent as Perfil } from "../../Assets/Svg/Perfil.svg";
import AddIcon from "@mui/icons-material/Add";

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src={Liteflix} />
        </div>
        <a href="#">
          <AddIcon /> Agregar Pelicula
        </a>
      </div>
      <div className="nav-right">
        <div className="menu">
          <Menu />
        </div>
        <div className="menu">
          <Notification />
        </div>
        <div className="menu">
          <Perfil />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
