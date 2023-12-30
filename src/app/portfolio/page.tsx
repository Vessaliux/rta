import 'server-only';

import clsx from 'clsx';
import Image from 'next/image';
import Carousel from './carousel';
import imgBG01 from '@/images/bg_1.png';
import imgBG02 from '@/images/bg_2.png';
import imgBG03 from '@/images/bg_3.png';
import imgBG04 from '@/images/bg_4.png';
import imgBG05 from '@/images/bg_5.png';
import imgBG06 from '@/images/bg_6.png';
import imgBG07 from '@/images/bg_7.png';
import imgBG08 from '@/images/bg_8.png';
import imgBG09 from '@/images/bg_9.png';
import imgBG10 from '@/images/bg_10.png';
import imgBG11 from '@/images/bg_11.png';
import imgBG12 from '@/images/bg_12.png';
import imgBG13 from '@/images/bg_13.png';
import imgBG14 from '@/images/bg_14.png';
import imgBG15 from '@/images/bg_15.png';
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
                            {[
                                imgBG01,
                                imgBG02,
                                imgBG03,
                                imgBG04,
                                imgBG05,
                                imgBG06,
                                imgBG07,
                                imgBG08,
                                imgBG09,
                                imgBG10,
                                imgBG11,
                                imgBG12,
                                imgBG13,
                                imgBG14,
                                imgBG15,
                            ].map((src, index) => (
                                <Image key={index} src={src} placeholder="blur" alt="" />
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
