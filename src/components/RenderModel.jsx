"use client"; // Add this pragma to mark the component as a client component
import { Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

export default function RenderModel({ children, className }) {
  return (
    <Canvas className={clsx("w-full h-full -z-10", className)}>
      {/* clsx => is a utility function used for conditionally joining class names together. */}
      {/* fallback => specifies what should be rendered while the suspended components are loading. */}
      {/* Suspense => it will load 3D Model asynchronously */}
      <Suspense fallback={null}>{children}</Suspense>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      {/* Procedural environment (no remote HDR fetch) */}
      <Environment resolution={256}>
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
  );
}
