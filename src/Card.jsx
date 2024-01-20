// Card.jsx
import React from "react";
import image from "./GitHub-Mark-ea2971cee799.png";
import "./Card.css"; // Import your CSS file

function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={image} alt="GitHub Logo" />
      <div className="card-content">
        <p className="card-text">Hello</p>
      </div>
    </div>
  );
}

export default Card;
