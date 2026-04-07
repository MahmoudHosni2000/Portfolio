"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  if (typeof size === "undefined") {
    return null;
  }

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;