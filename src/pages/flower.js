import React, { useState } from "react";
import { motion } from "framer-motion";

const Flower = () => {
  const [showLetter, setShowLetter] = useState(false);

  // Positions for multiple roses in a bouquet
  const roses = [
    { x: 90, y: 50, delay: 0 },
    { x: 120, y: 40, delay: 0.2 },
    { x: 70, y: 45, delay: 0.4 },
    { x: 100, y: 30, delay: 0.6 },
    { x: 50, y: 60, delay: 0.8 },
  ];

  return (
    <div className="front-container">
      {/* SVG Bouquet */}
      <h1 className="front-heading">Happy Rose Day Baby</h1>
      <motion.svg
        width="250"
        height="300"
        viewBox="0 0 200 300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Stems */}
        {roses.map((rose, index) => (
          <motion.line
            key={index}
            x1={rose.x}
            y1={rose.y + 30}
            x2="100"
            y2="280"
            stroke="green"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: rose.delay }}
          />
        ))}

        {/* Leaves */}
        <motion.ellipse
          cx="85"
          cy="150"
          rx="20"
          ry="10"
          fill="green"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.ellipse
          cx="115"
          cy="170"
          rx="20"
          ry="10"
          fill="green"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Roses */}
        {roses.map((rose, index) => (
          <motion.path
            key={index}
            d={`M ${rose.x} ${rose.y} 
              C ${rose.x + 20} ${rose.y - 20}, ${rose.x + 50} ${rose.y}, ${rose.x + 30} ${rose.y + 30}
              C ${rose.x + 60} ${rose.y + 20}, ${rose.x + 70} ${rose.y + 70}, ${rose.x + 30} ${rose.y + 90}
              C ${rose.x + 60} ${rose.y + 100}, ${rose.x + 20} ${rose.y + 150}, ${rose.x} ${rose.y + 120}
              C ${rose.x - 20} ${rose.y + 150}, ${rose.x - 60} ${rose.y + 100}, ${rose.x - 30} ${rose.y + 90}
              C ${rose.x - 70} ${rose.y + 70}, ${rose.x - 60} ${rose.y + 20}, ${rose.x - 30} ${rose.y + 30}
              C ${rose.x - 50} ${rose.y}, ${rose.x - 20} ${rose.y - 20}, ${rose.x} ${rose.y} Z`}
            fill="red"
            stroke="darkred"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: rose.delay }}
          />
        ))}
      </motion.svg>

      {/* Letter Box */}
      {!showLetter && (
        <motion.div
          className="letter-box"
          onClick={() => setShowLetter(true)}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          📩
        </motion.div>
      )}

      {/* Letter Animation */}
      {showLetter && (
        <motion.div
          className="letter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          So there are more than 320 types of roses, all of them are precious and special but not more than you. Log kehte h flower/rose beautiful hote pr unhone shyd tumhe ni dekha.
          Tumse khoobsurat koi rose nhi. I know tum ye sb dekh ke hasne vali ho me bhi hash hi rha hu. Toh ese hi haste rehna baby . Me kitne bhi flowers dedu but
          they will never be enough to justify how much i love you. Toh ye flowers apke liye. Happy rose day.   
        </motion.div>
      )}
    </div>
  );
};

export default Flower;
