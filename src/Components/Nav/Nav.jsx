import React, { useContext } from "react";
import "./Nav.css";
import Liteflix from "../../Assets/Img/LITEFLIX.png";
import { ReactComponent as Menu } from "../../Assets/Svg/Menu.svg";
import { ReactComponent as Notification } from "../../Assets/Svg/Notification.svg";
import { ReactComponent as Perfil } from "../../Assets/Svg/Perfil.svg";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../Modal/Modal";
import { MisPeliculasContext } from "../../App";
import Sidebar from "../Sidebar/Sidebar";

function Nav() {
  const { modal, setModal, sidebar, setSidebar } =
    useContext(MisPeliculasContext);
  return (
    <>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <img src={Liteflix} />
          </div>
          <a onClick={() => setModal(true)}>
            <AddIcon /> Agregar Pelicula
          </a>
        </div>
        <div className="nav-right">
          <div className="menu" onClick={() => setSidebar(true)}>
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
      {modal && <Modal />}
      {sidebar && <Sidebar />}
    </>
  );
}

export default Nav;
