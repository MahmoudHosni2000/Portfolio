"use client";

import dynamic from "next/dynamic";
import React from "react";
import IdleMount from "./IdleMount";

const FireFliesBG = dynamic(() => import("@/components/FireFliesBG"), {
  ssr: false,
});

export default function LazyFirefliesBG({ delayMs = 0 }) {
  return (
    <IdleMount delayMs={delayMs} fallback={null}>
      <FireFliesBG />
    </IdleMount>
  );
}

