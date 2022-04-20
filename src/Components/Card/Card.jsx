import React, { useState } from "react";
import "./Card.css";
import { ReactComponent as Play } from "../../Assets/Svg/play.svg";
import { ReactComponent as Star } from "../../Assets/Svg/Star.svg";
function Card({ imagen, title, rate, fecha, popular }) {
  const [isHovering, setIsHovering] = useState(false);
  var cardStyle = {
    background: `url(${imagen} )`,
  };
  return (
    <div className="card-animation">
      <div
        className="card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={cardStyle}
      >
        <div className="card-content" id={!isHovering ? "show" : "hide"}>
          <Play />
          <p>{title}</p>
        </div>
        <div className="card-content hover" id={isHovering ? "show" : "hide"}>
          <div className="top">
            <Play className="play-icon" />
            <p>{title}</p>
          </div>
          <div className="bottom">
            <span className="rate">
              <Star className="star" />
              <p>{rate}</p>
            </span>

            <p>{fecha}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
