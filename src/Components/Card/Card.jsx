import React from "react";
import "./Card.css";
import { ReactComponent as Play } from "../../Assets/Svg/play.svg";
function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <Play />
        <p>Hola</p>
      </div>
    </div>
  );
}

export default Card;
