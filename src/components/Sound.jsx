"use client";
import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

export default function Sound() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = useCallback(() => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    if (!audioRef.current) return;
    if (newState) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 32) { // keyCode 32 is for spacebar
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyPress );
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggle]);

  return (
    <>
      <div className="fixed top-4 right-2.5 xs-right-4 z-[70] group">
        <audio ref={audioRef} loop preload="none">
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
