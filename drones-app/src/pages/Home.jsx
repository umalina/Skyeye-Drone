import React from "react";
import DroneCard from "../components/DroneCard";
import "./Home.css";

const drones = [
  {
    name: "Phantom Pro X",
    img: "https://5.imimg.com/data5/PH/HJ/MY-13169908/phantom-pro-drone-camera.jpg",
    desc: "4K camera drone with AI stabilization and 30-minute flight time.",
  },
  {
    name: "AeroScout 360",
    img: "https://pics.runbazaar.com/-_B-Vxw1Hfuyd5VlHBuYn3QylCcmcDt7fzCGjzRMGV8/t:0.1:ffffff:1:1/g:sm/rs:fit:750:750:1:1/bG9jYWw6Ly8vbWVkaWEvcHJvZHVjdF9pbWcvMjAyNC8wOS8yNi9SQkk1QUxRVC84MDlfMS5qcGc",
    desc: "Lightweight travel drone perfect for explorers and vloggers.",
  },
  {
    name: "Falcon Z Ultra",
    img: "https://www.flightelf.com/cdn/shop/files/2000_-1_52a4e885-6041-470b-a0f3-b55ca8604474.jpg?v=1724075324",
    desc: "High-speed drone with long-range GPS navigation and live feed.",
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to SkyEye Drones</h1>
        <p>Innovative. Reliable. Intelligent. Discover the sky like never before.</p>
        <button className="cta">Explore Now</button>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>🚀 AI-Based Navigation</li>
          <li>📷 4K Ultra HD Camera</li>
          <li>🔋 Long Battery Life</li>
          <li>🌎 GPS Auto Return</li>
        </ul>
      </section>

      <section className="models">
        <h2>Our Drone Models</h2>
        <div className="drone-grid">
          {drones.map((drone, index) => (
            <DroneCard key={index} {...drone} />
          ))}
        </div>
      </section>
    </div>
  );
}
