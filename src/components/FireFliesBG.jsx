"use client";

import clsx from "clsx";
import React, { useEffect, useRef } from "react";

const parseColor = (color) => {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

  if (match) {
    return {
      r: Number.parseInt(match[1], 10),
      g: Number.parseInt(match[2], 10),
      b: Number.parseInt(match[3], 10),
    };
  }

  return { r: 255, g: 255, b: 150 };
};

const createNoise = (x, y, tick) =>
  Math.sin(x * 0.01 + tick) * 0.5 +
  Math.sin(y * 0.013 + tick * 1.1) * 0.5 +
  Math.sin((x + y) * 0.007 + tick * 0.9) * 0.3;

const createFirefly = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: 2 + Math.random() * 2,
  phase: Math.random() * Math.PI * 2,
  pulseSpeed: 0.02 + Math.random() * 0.03,
  noiseOffsetX: Math.random() * 1000,
  noiseOffsetY: Math.random() * 1000,
  noiseSpeed: 0.3 + Math.random() * 0.4,
  depth: 0.3 + Math.random() * 0.7,
});

export default function FireFliesBG({
  className,
  children,
  count = 40,
  color = "rgba(255, 255, 150, 1)",
  speed = 1,
  glowIntensity = 1,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const rgb = parseColor(color);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let tick = 0;

    const fireflies = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      if (fireflies.length === 0) {
        for (let index = 0; index < count; index += 1) {
          fireflies.push(createFirefly(width, height));
        }
      } else {
        for (const firefly of fireflies) {
          firefly.x = Math.min(firefly.x, width);
          firefly.y = Math.min(firefly.y, height);
        }
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    resizeCanvas();

    const animate = () => {
      tick += prefersReducedMotion ? 0.25 : speed;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5, 10, 20, 0.18)";
      ctx.fillRect(0, 0, width, height);

      for (const firefly of fireflies) {
        const motionSpeed = prefersReducedMotion ? 0.2 : speed;

        const noiseX = createNoise(
          firefly.noiseOffsetX,
          firefly.noiseOffsetY,
          tick * 0.01 * firefly.noiseSpeed
        );
        const noiseY = createNoise(
          firefly.noiseOffsetY,
          firefly.noiseOffsetX,
          tick * 0.01 * firefly.noiseSpeed + 100
        );

        firefly.x += noiseX * firefly.depth * motionSpeed * 0.5;
        firefly.y += noiseY * firefly.depth * motionSpeed * 0.5;

        if (firefly.x < -20) firefly.x = width + 20;
        if (firefly.x > width + 20) firefly.x = -20;
        if (firefly.y < -20) firefly.y = height + 20;
        if (firefly.y > height + 20) firefly.y = -20;

        const pulse = Math.sin(
          tick * firefly.pulseSpeed * motionSpeed + firefly.phase
        );
        const brightness = Math.max(0, pulse * 1.5 - 0.3);

        if (brightness <= 0) continue;

        const currentSize =
          firefly.size * firefly.depth * (0.8 + brightness * 0.2);
        const alpha = brightness * firefly.depth;
        const glowRadius = currentSize * (4 + brightness * 4) * glowIntensity;

        const gradient = ctx.createRadialGradient(
          firefly.x,
          firefly.y,
          0,
          firefly.x,
          firefly.y,
          glowRadius
        );

        gradient.addColorStop(
          0,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.9})`
        );
        gradient.addColorStop(
          0.1,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.6})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.2})`
        );
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, currentSize * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = window.requestAnimationFrame(animate);
    };

    ctx.clearRect(0, 0, width, height);
    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [color, count, glowIntensity, speed]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={clsx(
        "fixed inset-0 overflow-hidden pointer-events-none -z-10",
        className
      )}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(100, 150, 80, 0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 30%, rgba(80, 120, 100, 0.05) 0%, transparent 40%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 48%, rgba(0,5,10,0.45) 100%)",
        }}
      />

      {children ? <div className="relative z-10 h-full w-full">{children}</div> : null}
    </div>
  );
}
