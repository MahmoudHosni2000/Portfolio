import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y:100 },
  show: { opacity: 1, y:0  }
}

const NavLink = motion(Link);

const formatDate = (date) => {
  const [y, m] = String(date).split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[Number(m) - 1] || ''} ${y}`.trim();
};

export default function ProjectLayout({name,description,date,link}) {
  return (
    <NavLink
    variants={item}
    href ={link}
    target={'_blank'}
    className='text-sm md:text-base w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-0'>
      <div className='flex items-baseline justify-between gap-3 md:contents'>
        <h2 className='text-foreground font-medium md:font-normal md:mr-2'>{name}</h2>
        <p className='text-foreground text-xs text-muted md:hidden whitespace-nowrap'>{formatDate(date)}</p>
      </div>
      <p className='text-muted text-[13px] leading-snug md:text-base'>{description}</p>
      <div className='hidden md:block self-end flex-1 mx-2 mb-1 border-b border-dashed border-muted' />
      <p className='hidden md:block text-foreground whitespace-nowrap'>{formatDate(date)}</p>
    </NavLink>
  )
}
