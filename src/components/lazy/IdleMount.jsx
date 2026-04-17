"use client";

import React, { useEffect, useState } from "react";

export default function IdleMount({
  children,
  fallback = null,
  delayMs = 0,
  useIdleCallback = true,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;
    let idleId;

    const mount = () => {
      if (!cancelled) setMounted(true);
    };

    const schedule = () => {
      if (!useIdleCallback || typeof window.requestIdleCallback !== "function") {
        timeoutId = window.setTimeout(mount, delayMs);
        return;
      }

      idleId = window.requestIdleCallback(
        () => {
          timeoutId = window.setTimeout(mount, delayMs);
        },
        { timeout: 1500 }
      );
    };

    schedule();

    return () => {
      cancelled = true;
      if (typeof window.cancelIdleCallback === "function" && idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [delayMs, useIdleCallback]);

  return mounted ? children : fallback;
}

