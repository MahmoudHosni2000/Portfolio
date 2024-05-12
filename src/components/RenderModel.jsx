"use client"; // Add this pragma to mark the component as a client component
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

export default function RenderModel({ children, className }) {
  return (
    <Canvas className={clsx("w-screen h-10 -z-10 relative", className)}>
      {/* clsx => is a utility function used for conditionally joining class names together. */}
      {/* fallback => specifies what should be rendered while the suspended components are loading. */}
      {/* Suspense => it will load 3D Model asynchronously */}
        <Suspense fallback={null}>{children}</Suspense>
        {/* Environment = used to  */}
        <Environment preset="dawn" />
    </Canvas>
  );
}
