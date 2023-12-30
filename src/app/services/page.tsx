import 'server-only';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import FlipCard from '@/app/components/flip-card';
import imgAnime from '@/images/services_anime.png';
import imgBG from '@/images/services_bg.png';
import imgCF from '@/images/services_cf.png';
import imgCutout from '@/images/services_cutout.png';
import imgDesign from '@/images/services_design.png';
import imgEdu from '@/images/services_edu.png';
import imgMograph from '@/images/services_mograph.png';
import imgStb from '@/images/services_stb.png';
import imgTrailer from '@/images/services_trailer.png';
import imgWestern from '@/images/services_western.png';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | RTA',
    description: 'Services | RTA',
};

const CardFront = ({ src, title }: { src: StaticImageData; title: string }) => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <Image className="w-3/4 rounded-full" src={src} placeholder="blur" alt="" />
            <p className="font-semibold text-body">{title}</p>
        </div>
    );
};

const CardBack = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-4 text-body-light text-sm text-balance">{children}</div>
    );
};

const Services = () => {
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
                    <h5>
                        Right Timing Animation (RTA) Studio boasts a fully equipped infrastructure
                        to handle comprehensive animation production, as well as offering
                        pre-production and post-production solutions. With our experienced crew of
                        animators, we excel in delivering a diverse range of animation services.
                    </h5>
                    <div
                        className={clsx(
                            'grid gap-12',
                            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        )}>
                        <FlipCard
                            front={<CardFront src={imgAnime} title="JAPANESE ANIMATION (ANIME)" />}
                            back={
                                <CardBack>
                                    <p>
                                        Our team has a deep understanding of the unique style and
                                        techniques of Japanese anime.
                                    </p>
                                    <p>
                                        We can bring your anime-inspired projects to life, capturing
                                        the essence of this beloved art form.​
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgWestern} title="WESTERN ANIMATION" />}
                            back={
                                <CardBack>
                                    <p>
                                        We have the experience and the expertise to create
                                        captivating Western-style animations that cater to abroad
                                        audience, from children's shows to adult-oriented content.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgCutout} title="CUT-OUT ANIMATION" />}
                            back={
                                <CardBack>
                                    <p>
                                        Using cut-out animation techniques, we can create dynamic
                                        customized rigs and visually engaging animations ​by
                                        manipulating 2D characters and objects, offering a distinct
                                        and eye-catching aesthetic.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgTrailer} title="TRAILERS" />}
                            back={
                                <CardBack>
                                    <p>
                                        We specialize in crafting animated trailers that captivate
                                        audiences and showcase the excitement and immersive
                                        experiences offered by ​your video game or ideas.
                                    </p>
                                    <p>
                                        Our animations enhance the gameplay and story elements,
                                        leaving a lasting impressionon viewers.​
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgCF} title="COMMERCIALS" />}
                            back={
                                <CardBack>
                                    <p>
                                        With our expertise in storytelling and visual communication,
                                        we create compelling animations for commercials that
                                        effectively convey your brand message, engage audiences,
                                        ​and leave a lasting impact.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgEdu} title="EDUCATIONAL ANIMATION" />}
                            back={
                                <CardBack>
                                    <p>
                                        We understand the importance of engaging and informative
                                        educational content.
                                    </p>
                                    <p>
                                        Our team can develop educational animations that simplify
                                        complex ​concepts, making learning enjoyable and accessible
                                        ​for diverse audiences.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgMograph} title="MOTION GRAPHICS" />}
                            back={
                                <CardBack>
                                    <p>
                                        We excel in creating visually stunning motion graphics that
                                        combine animation, typography, and visual effects to convey
                                        information, enhance storytelling, and elevate the overall
                                        viewing experience.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgStb} title="STORYBOARDING & LAYOUTS" />}
                            back={
                                <CardBack>
                                    <p>
                                        Our skilled artists can bring your ideas to life through
                                        detailed storyboards and layouts, helping you visualize and
                                        plan your animation projects effectively.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={
                                <CardFront
                                    src={imgDesign}
                                    title="CHARACTER DESIGN & ILLUSTRATIONS"
                                />
                            }
                            back={
                                <CardBack>
                                    <p>
                                        Our talented team can design unique and memorable characters
                                        tailored to your project's needs, ensuring they resonate
                                        with audiences and drive the narrative forward.
                                    </p>
                                </CardBack>
                            }
                        />
                        <FlipCard
                            front={<CardFront src={imgBG} title="BACKGROUND ART" />}
                            back={
                                <CardBack>
                                    <p>
                                        From vibrant landscapes to intricately detailed
                                        environments, we create captivating background art that
                                        complements the overall animation, setting the mood and
                                        enhancing the storytelling experience.
                                    </p>
                                </CardBack>
                            }
                        />
                    </div>
                    <h5>
                        At Right Timing Animation Studios, we pride ourselves on our versatility,
                        adaptability, and commitment to delivering exceptional animation services
                        across various styles and genres. Our skilled team enable us to bring your
                        creative vision to life with unmatched quality and innovation.
                    </h5>
                </div>
            </div>
        </>
    );
};

export default Services;
