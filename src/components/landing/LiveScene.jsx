"use client";

import LazyFirefliesBG from "@/components/lazy/LazyFirefliesBG";
import LazyThreeModelScene from "@/components/lazy/LazyThreeModelScene";

// Live animated background for the landing page: fireflies + the 3D wizard,
// layered above the static poster image and below the readability gradient.
// pointer-events-none so every landing link and button stays clickable.
// modelScale shrinks the wizard on small screens to match the approved
// composition (fireflies are left full-size).
export default function LiveScene({ modelScale = 1 }) {
  return (
    <div
      className="absolute inset-0 z-[1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <LazyFirefliesBG delayMs={400} className="!absolute" />
      <div
        className="absolute"
        style={
          modelScale === 1
            ? { inset: 0 }
            : {
                width: `${modelScale * 100}%`,
                height: `${modelScale * 100}%`,
                left: "50%",
                top: "56%",
                transform: "translate(-50%, -50%)",
              }
        }
      >
        <LazyThreeModelScene model="Wizard" delayMs={900} />
      </div>
    </div>
  );
}
