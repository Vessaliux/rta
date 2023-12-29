import 'server-only';

import clsx from 'clsx';

const Home = () => {
    return (
        <div className="bg-white shadow-sm">
            <div
                className={clsx(
                    'flex flex-col gap-6 max-w-content mx-auto text-body',
                    'px-5 py-8 sm:px-6 sm:py-12'
                )}>
                <h4 className="font-bold text-default">
                    Welcome to Right Timing Animation (RTA) Studios!
                </h4>
                <p>
                    We are a premier boutique-style animation production house located in Cavite,
                    Philippines.
                </p>
                <p>
                    With a team of experienced animation veterans, we have not only withstood the
                    test of time but have also adapted to the ever-evolving animation industry.
                </p>
                <p>
                    With over three decades of animation experience, we excel in various animation
                    styles, ranging from hand-drawn paperless to cut-out hybrids, encompassing both
                    Anime and Western styles.
                </p>
                <p>
                    At RTA Studio, we offer comprehensive services across the entire production
                    pipeline, including pre-production, production, and post-production.
                    Additionally, we also capable of 3D animation and visual effects (VFX) for both
                    animated and live-action films.
                </p>
                <p>
                    We take pride in delivering top-notch services, ensuring that every project we
                    undertake meets the highest standards of quality. We believe in building strong
                    relationships with our clients and collaborating closely to bring their ideas to
                    life.
                </p>
                <p>
                    If you're interested in working with us, we invite you to reach out and schedule
                    a meeting. Let's sit down together, have a cup of coffee, and discuss how our
                    expertise and passion can help turn your vision into reality.
                </p>
                <p>
                    ​At RTA Studio, we are dedicated to creating captivating and innovative
                    animation that leaves a lasting impression.
                </p>
            </div>
        </div>
    );
};

export default Home;
