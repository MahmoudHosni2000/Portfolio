"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const MODEL_PATHS = [
  "/models/wizard-transformed.glb",
  "/models/hat-transformed.glb",
  "/models/staff-transformed.glb",
];

export default function ModelPreloads() {
  useEffect(() => {
    if (typeof useGLTF.setDecoderPath === "function") {
      useGLTF.setDecoderPath("/draco/gltf/");
    }

    MODEL_PATHS.forEach((path) => {
      useGLTF.preload(path);
    });
  }, []);

  return null;
}
