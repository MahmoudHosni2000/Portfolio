"use client";

import React, { useMemo } from "react";
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/Hat";
import Staff from "@/components/models/Staff";
import Wizard from "@/components/models/Wizard";

export default function LazyThreeModelScene({
  model,
  className,
}) {
  const Model = useMemo(() => {
    if (model === "Hat") return Hat;
    if (model === "Staff") return Staff;
    return Wizard;
  }, [model]);

  return (
    <RenderModel className={className}>
      <Model />
    </RenderModel>
  );
}
