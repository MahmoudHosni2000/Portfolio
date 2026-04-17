"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import IdleMount from "./IdleMount";

const RenderModel = dynamic(() => import("@/components/RenderModel"), {
  ssr: false,
});

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});
const Hat = dynamic(() => import("@/components/models/Hat"), { ssr: false });
const Staff = dynamic(() => import("@/components/models/Staff"), { ssr: false });

export default function LazyThreeModelScene({
  model,
  delayMs = 1200,
  className,
}) {
  const Model = useMemo(() => {
    if (model === "Hat") return Hat;
    if (model === "Staff") return Staff;
    return Wizard;
  }, [model]);

  return (
    <IdleMount delayMs={delayMs} fallback={null}>
      <RenderModel className={className}>
        <Model />
      </RenderModel>
    </IdleMount>
  );
}

