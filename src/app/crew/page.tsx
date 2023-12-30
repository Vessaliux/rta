import 'server-only';

import clsx from 'clsx';
import Image from 'next/image';
import FlipCard from '@/app/components/flip-card';
import imgDefault from '@/images/crew_default.png';
import imgRafael from '@/images/crew_Rafael Bonifacio Jr.png';
import imgJoshua from '@/images/crew_Joshua.png';
import imgDavid from '@/images/crew_David Castillo.png';
import imgRogel from '@/images/crew_Rogel Venturanza.png';
import imgVincente from '@/images/crew_Vicente Estopel.png';
import imgReynaldo from '@/images/crew_Reynaldo Flores.png';
import imgRoberto from '@/images/crew_Roberto Del Rosario.png';
import imgNeil from '@/images/crew_Neil Buenaflor.png';
import imgCarlo from '@/images/crew_Carlo Pujeda.png';
import imgSuzanne from '@/images/crew_Suzanne Sanares.png';
import imgYukari from '@/images/crew_Yukari Iwama.png';
import imgJoshuaSasotona from '@/images/crew_Joshua Sasotona.png';
import type { Metadata } from 'next';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const metadata: Metadata = {
    title: 'Crew | RTA',
    description: 'Crew | RTA',
};

type CrewData = {
    src: StaticImport;
    title: string;
    name: string;
};
const CREW_DATA: CrewData[] = [
    {
        src: imgRafael,
        name: 'Rafael Bonifacio Jr.',
        title: 'FOUNDER & MANAGING DIRECTOR',
    },
    {
        src: imgJoshua,
        name: 'Joshua Jang Min Sik',
        title: 'CO-FOUNDER & ART DIRECTOR',
    },
    { src: imgDavid, name: 'David Castillo', title: 'SENIOR ANIMATOR' },
    { src: imgRogel, name: 'Rogel Venturanza', title: 'SENIOR ANIMATOR' },
    { src: imgVincente, name: 'Vicente Estopel', title: 'SENIOR ANIMATOR' },
    { src: imgReynaldo, name: 'Reynaldo Flores', title: 'SENIOR ANIMATOR' },
    { src: imgRoberto, name: 'Roberto Del Rosario', title: 'SENIOR ANIMATOR' },
    { src: imgNeil, name: 'Neil Buenaflor', title: 'SENIOR ANIMATOR' },
    { src: imgDefault, name: 'Ace Valenzuela', title: 'PRODUCER & PROJECT MANAGER' },
    { src: imgCarlo, name: 'Carlo Pujeda', title: 'LEAD BACKGROUND ARTIST' },
    { src: imgDefault, name: 'Paulyn Prudenciado', title: 'BACKGROUND & LAYOUT ARTIST' },
    { src: imgDefault, name: 'Lovely Prudenciado', title: 'LEAD DIGITAL ARTIST' },
    { src: imgSuzanne, name: 'Suzanne Sanares', title: 'DIGITAL ARTIST' },
    { src: imgYukari, name: 'Yukari Iwama', title: 'DIGITAL ARTIST' },
    {
        src: imgJoshuaSasotona,
        name: 'Joshua Sasotona',
        title: 'DRONE PILOT, FILM & POST PRODUCTIONS',
    },
];

const CardFront = ({ src, name, title }: { src: StaticImport; name: string; title: string }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <Image
                className="rounded-full"
                src={src}
                placeholder="blur"
                alt=""
                width={300}
                height={300}
            />
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
                                useFlip={false}
                                front={
                                    <CardFront src={crew.src} name={crew.name} title={crew.title} />
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
