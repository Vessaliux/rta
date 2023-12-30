import 'server-only';

import clsx from 'clsx';
import Image from 'next/image';
import Carousel from './carousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | RTA',
    description: 'Portfolio | RTA',
};

const Portfolio = () => {
    return (
        <>
            <div className={clsx('bg-[#29445a]', 'py-11 sm:py-20')}>
                <h1 className="font-libre-franklin font-semibold text-white text-center">
                    PORTFOLIO
                </h1>
            </div>
            <div className="bg-[#f0f8ff] shadow-sm">
                <div
                    className={clsx(
                        'flex flex-col gap-10 max-w-[1200px] mx-auto text-default',
                        'px-5 py-8 sm:px-6 sm:py-12'
                    )}>
                    <div>
                        <h2 className="mb-3">BACKGROUNDS</h2>
                        <Carousel className="rounded shadow-md aspect-video">
                            {Array.from(Array(10).keys()).map((index) => (
                                <Image
                                    key={index}
                                    src={`/bg_${index + 1}.png`}
                                    alt=""
                                    width={1920}
                                    height={1080}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <h2 className="mb-3">ANIMATION TEST</h2>
                        <video controls>
                            <source src="/SV_Action_Test.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
