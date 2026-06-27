"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import ModelLoadingPlaceholder from "./lazy/ModelLoadingPlaceholder";

export default function RenderModel({ children, className }) {
  return (
    <div className={clsx("relative h-full w-full", className)}>
      <Suspense fallback={<ModelLoadingPlaceholder />}>
        <Canvas
          className="absolute inset-0 -z-10 h-full w-full"
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          {children}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.1} />
          <Environment resolution={64}>
            <Lightformer
              intensity={2.5}
              position={[0, 5, -10]}
              scale={[12, 12, 1]}
            />
            <Lightformer
              intensity={1.5}
              position={[-8, 2, 2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[8, 8, 1]}
            />
            <Lightformer
              intensity={1.2}
              position={[8, 2, 2]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[8, 8, 1]}
            />
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
}
