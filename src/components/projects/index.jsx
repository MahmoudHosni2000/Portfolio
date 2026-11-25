"use client";
import React from 'react'
import ProjectLayout from './ProjectLayout'
import { motion } from 'framer-motion';

const container = {
  hidden: {
      opacity:0
  },
  show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      }
  }
}

export default function ProjectList({projects}) {
  return (
    <motion.div 
    variants = {container}
    initial = 'hidden'
    animate = 'show'
    className='w-[calc(100%+2rem)] -mx-4 xs:w-full xs:mx-auto max-w-auto xl:max-w-4xl px-0 xs:px-4 lg:px-16 space-y-4 md:space-y-8 flex flex-col items-center'>
        {projects.map((project, index)=>{
            return (
                <ProjectLayout key={index} {...project} />
            )
        })}
    </motion.div>
  )
}
