import React from "react";
import "./Populares.css";
import Card from "../Card/Card";
function Populares() {
  return (
    <div className="populares">
      <div className="title">
        <p>
          Ver:<b>Populares</b>
        </p>
      </div>
      <div className="movie-list">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Populares;
