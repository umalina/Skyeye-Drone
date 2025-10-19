import React from "react";
import "./DroneCard.css";

export default function DroneCard({ name, img, desc }) {
  return (
    <div className="drone-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}
