/*
  This custom React hook, useScreenSize, provides functionality to dynamically track the width of the user's screen. 

  When the component using this hook mounts, it sets up an event listener for the window resize event. 
  Whenever the window is resized, the handleResize function is triggered, updating the screenSize state with the current inner width of the window.

  The hook returns the screenSize state, providing a simple and reusable way to access and respond to changes in screen width within React components.
*/

"use client";
import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth;
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

  }, []);

  return screenSize;
};

export default useScreenSize;