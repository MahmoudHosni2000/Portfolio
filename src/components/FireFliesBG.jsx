"use client";
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Function to generate random number within a range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// Keyframes for firefly animation
const flicker = keyframes`
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 0;
  }
  20%, 21.999%, 63%, 63.999% {
    opacity: 1;
  }
`;

// Firefly component
const Firefly = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
  animation: ${flicker} ${() => randomInRange(1, 4)}s infinite alternate;
`;

// Firefly background component
const FireFliesBG = ({ children }) => {
  useEffect(() => {
    const container = document.getElementById('fireflies-container');
    const numberOfFireflies = 100; // Adjust as needed

    // Create fireflies
    for (let i = 0; i < numberOfFireflies; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      container.appendChild(firefly);
      firefly.style.left = `${randomInRange(0, 100)}vw`;
      firefly.style.top = `${randomInRange(0, 100)}vh`;
    }

    // Clean up function
    return () => {
      const fireflies = document.querySelectorAll('.firefly');
      fireflies.forEach(firefly => firefly.remove());
    };
  }, []);

  return (
    <div id="fireflies-container" className="fireflies fixed inset-0 -z-10" >
      {children}
      <Firefly />
    </div>
  );
};

export default FireFliesBG;

