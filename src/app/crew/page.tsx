import 'server-only';

import clsx from 'clsx';
import Image from 'next/image';
import FlipCard from '@/app/components/flip-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crew | RTA',
    description: 'Crew | RTA',
};

type CrewData = {
    src: string;
    title: string;
    name?: string;
};
const CREW_DATA: CrewData[] = [
    {
        src: 'Rafael Bonifacio Jr',
        title: 'FOUNDER & MANAGING DIRECTOR',
        name: 'Rafael Bonifacio Jr.',
    },
    { src: 'Joshua', title: 'CO-FOUNDER & ART DIRECTOR', name: 'Joshua Jang Min Sik' },
    { src: 'David Castillo', title: 'SENIOR ANIMATOR' },
    { src: 'Rogel Venturanza', title: 'SENIOR ANIMATOR' },
    { src: 'Vicente Estopel', title: 'SENIOR ANIMATOR' },
    { src: 'Reynaldo Flores', title: 'SENIOR ANIMATOR' },
    { src: 'Roberto Del Rosario', title: 'SENIOR ANIMATOR' },
    { src: 'Neil Buenaflor', title: 'SENIOR ANIMATOR' },
    { src: 'default', title: 'PRODUCER & PROJECT MANAGER', name: 'Ace Valenzuela' },
    { src: 'Carlo Pujeda', title: 'LEAD BACKGROUND ARTIST' },
    { src: 'default', title: 'BACKGROUND & LAYOUT ARTIST', name: 'Paulyn Prudenciado' },
    { src: 'default', title: 'LEAD DIGITAL ARTIST', name: 'Lovely Prudenciado' },
    { src: 'Suzanne Sanares', title: 'DIGITAL ARTIST' },
    { src: 'Yukari Iwama', title: 'DIGITAL ARTIST' },
    { src: 'Joshua Sasotona', title: 'DRONE PILOT, FILM & POST PRODUCTIONS' },
];

const CardFront = ({ src, name, title }: { src: string; name: string; title: string }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <Image className="rounded-full" src={src} alt="" width={300} height={300} priority />
            <p className="font-semibold text-body">{name}</p>
            <p className="font-semibold text-body-light text-xs text-balance">{title}</p>
        </div>
    );
};

const CardBack = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-4 text-body-light text-sm text-balance">{children}</div>
    );
};

const Crew = () => {
    return (
        <>
            <div className={clsx('bg-[#375a29]', 'py-11 sm:py-20')}>
                <h1 className="font-libre-franklin font-semibold text-white text-center">
                    SERVICES
                </h1>
            </div>
            <div className="bg-[#f4ffee] shadow-sm">
                <div
                    className={clsx(
                        'flex flex-col gap-6 max-w-content mx-auto text-body-light',
                        'px-5 py-8 sm:px-6 sm:py-12'
                    )}>
                    <div
                        className={clsx('grid gap-6', 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4')}>
                        {CREW_DATA.map((crew, index) => (
                            <FlipCard
                                key={index}
                                front={
                                    <CardFront
                                        src={`/crew_${crew.src}.png`}
                                        name={crew.name ?? crew.src}
                                        title={crew.title}
                                    />
                                }
                                back={
                                    <CardBack>
                                        <p>Description</p>
                                    </CardBack>
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Crew;
