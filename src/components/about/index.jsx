'use client';
import React from 'react';
import ItemLayout from './ItemLayout';
import Link from "next/link";

export default function AboutDetails() {
    return (
        <section className='pb-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'} >
                    <h2 className="text-xl md:text-2xl md:text-2xl text-left w-full capitalize">
                    Architect of Enchantment
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base text-xs sm:text-sm md:text-base">
                    My journey in web development is powered by an array of mystical
                    tools and languages, with JavaScript casting the core of my
                    enchantments. I wield frameworks like React.js and Next.js with
                    precision, crafting seamless portals (websites) that connect realms
                    (users) across the digital universe. The ancient arts of the
                    Jamstack empower me to create fast, secure, and dynamic experiences,
                    while my design skills ensure every creation is not only functional
                    but visually captivating. Join me as I continue to explore new
                    spells and technologies to shape the future of the web.
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 row-span-2 text-accent'} >
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        0-1 <sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full"}>
                <img
                    className="w-full h-auto"
                    src={`https://skillicons.dev/icons?i=c,cs,cpp,bootstrap,css,firebase,git,github,html,js,linux,netlify,nextjs,nodejs,npm,react,redux,sass,tailwind,threejs,vercel,vscode`}
                    alt="CodeBucks"
                    loading="lazy"
                />
                </ItemLayout>
            </div>
        </section>
    )
}
