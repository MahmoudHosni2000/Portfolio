"use client";

import dynamic from "next/dynamic";
import React from "react";
import IdleMount from "./IdleMount";

const Sound = dynamic(() => import("@/components/Sound"), { ssr: false });

export default function LazySound({ delayMs = 800 }) {
  return (
    <IdleMount delayMs={delayMs} fallback={null}>
      <Sound />
    </IdleMount>
  );
}

