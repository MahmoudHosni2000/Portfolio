"use client";
import React, { useMemo } from "react";

// Function to generate random number within a range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// Firefly background component
const FireFliesBG = ({ children, count = 60 }) => {
  const fireflies = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const x = randomInRange(0, 100);
      const y = randomInRange(0, 100);
      const dx = randomInRange(-6, 6);
      const dy = randomInRange(-6, 6);
      const size = randomInRange(2, 4.5);
      const flickerDelay = randomInRange(0, 8);
      const driftDelay = randomInRange(0, 10);
      const flicker = randomInRange(4, 10);
      const drift = randomInRange(10, 22);

      return (
        <span
          key={index}
          className="firefly"
          style={{
            ["--x"]: `${x}vw`,
            ["--y"]: `${y}vh`,
            ["--dx"]: `${dx}vw`,
            ["--dy"]: `${dy}vh`,
            ["--size"]: `${size}px`,
            ["--flickerDelay"]: `${flickerDelay}s`,
            ["--driftDelay"]: `${driftDelay}s`,
            ["--flicker"]: `${flicker}s`,
            ["--drift"]: `${drift}s`,
          }}
        />
      );
    });
  }, [count]);

  return (
    <div
      className="fireflies fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      {children}
      {fireflies}
    </div>
  );
};

export default FireFliesBG;

