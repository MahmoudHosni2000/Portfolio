"use client";
import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

export default function Sound() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState();
  const [showPrompt, setShowPrompt] = useState();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress );
}, [isPlaying]);

const handleKeyPress = (event) => {
  if (event.keyCode === 32) { // keyCode 32 is for spacebar
    toggle();
  }
}

var expirationTime = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
  useEffect(() => {
    const musicConsent = JSON.parse(localStorage.getItem('musicConsent'));
    console.log(musicConsent?.expires);
    if (musicConsent !== null) {
      setShowPrompt(false)
      setIsPlaying(musicConsent);
    }else{
      setShowPrompt(true)
    }
  }, []);
  
  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", JSON.stringify({ isPlaying: newState, expires: expirationTime })); //JSON.stringify or String()
  }

  const handlePromptResponse = (response) => {
    setShowPrompt(false);
    if (response === 'yes') {
      toggle();
    }
  };

  return (
    <>
      {showPrompt && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
            <p>Do you like to play the background music?</p>
            <button
              onClick={() => handlePromptResponse('yes')}
              className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
            >
              Yes
            </button>
            <button
              onClick={() => handlePromptResponse('no')}
              className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
            >
              No
            </button>
          </div>
        </div>
      )}
      <div className="fixed top-4 right-2.5 xs-right-4 z-50 group">
        <audio ref={audioRef} loop>
          <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        </audio>
        <motion.button
          onClick={toggle}
          className="group p-2.5 xs:p-4 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 right-4"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          name={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Volume2 className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
          ) : (
            <VolumeX className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
          )}
        </motion.button>
      </div>
    </>
  );
}
