'use client';
import React from 'react';
import ItemLayout from './ItemLayout';
import Image from "next/image";

export default function AboutDetails() {
    return (
        <section className='w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'} >
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                        Architect of Enchantment
                    </h2>
                    <p className="font-light text-sm sm:text-base leading-relaxed">
                        I&apos;m a Cairo-based full-stack developer who builds fast React and
                        Next.js front ends and the ASP.NET Core APIs behind them. I&apos;ve shipped
                        real apps, including a clinic management platform, an ordering API with
                        JWT, Redis and Stripe, and an e-commerce API. A little wizardry helps: I
                        keep things quick, tidy and easy to use. I&apos;m open to remote or
                        relocation, so if you have a spell that needs casting, get in touch.
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 row-span-2 text-accent flex-col !space-y-2 text-center'} >
                    <p className='font-bold leading-none text-6xl sm:text-7xl'>2+</p>
                    <p className='font-semibold text-base sm:text-lg leading-snug max-w-[14rem]'>years building production apps</p>
                </ItemLayout>
                <ItemLayout className={"col-span-full"}>
                    <Image
                        unoptimized
                        className="hidden sm:block w-full h-auto"
                        src="https://skillicons.dev/icons?i=c,cpp,cs,js,typescript,html,css,sass,bootstrap,tailwind,react,redux,threejs,nextjs,nodejs,npm,dotnet,prisma,supabase,firebase,postman,gulp,git,github,vercel,netlify,ai,vscode,arduino"
                        alt="Skills icons"
                        width={800}
                        height={500}
                    />
                    <Image
                        unoptimized
                        className="sm:hidden w-full max-w-[340px] mx-auto h-auto"
                        src="https://skillicons.dev/icons?i=c,cpp,cs,js,typescript,html,css,sass,bootstrap,tailwind,react,redux,threejs,nextjs,nodejs,npm,dotnet,prisma,supabase,firebase,postman,gulp,git,github,vercel,netlify,ai,vscode,arduino&perline=8"
                        alt="Skills icons"
                        width={800}
                        height={500}
                    />
                </ItemLayout>
            </div>
        </section>
    )
}
