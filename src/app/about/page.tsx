import 'server-only';

import clsx from 'clsx';
import Accordion from './accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | RTA',
    description: 'About | RTA',
};

const About = () => {
    return (
        <>
            <div className={clsx('bg-[#6d2c2c]', 'py-11 sm:py-20')}>
                <h1 className="font-libre-franklin font-semibold text-white text-center">
                    SERVICES
                </h1>
            </div>
            <div className="bg-[#f1f5f6] shadow-sm">
                <div
                    className={clsx(
                        'flex flex-col gap-6 max-w-content mx-auto text-body-light',
                        'px-5 py-8 sm:px-6 sm:py-12'
                    )}>
                    <h5>
                        Right Timing Animation (RTA) Studio was founded in October 2022 by Rafael
                        Bonifacio Jr., who identified the need and potential for an Animation
                        Company to serve as a Strategic Central Hub in South East Asia. The vision
                        was to establish a studio that would produce high-quality animation that
                        inspires creativity and imagination - at the RIGHT TIME.​
                    </h5>
                    <Accordion
                        header="HISTORY"
                        body={
                            <>
                                <p className="mt-2">
                                    <strong>Early Challenges and Determination</strong>
                                </p>
                                <p className="mt-1">
                                    Like any startup, RTA Studio encountered a set of challenges
                                    during its early days. Limited resources, talent acquisition,
                                    and establishing a solid operational base presented significant
                                    hurdles. Nevertheless, the team's unwavering determination,
                                    resilience, and belief in their dreams propelled them forward.
                                </p>
                                <p className="mt-6">
                                    <strong>Building a Creative Team and Infrastructure</strong>
                                </p>
                                <p className="mt-1">
                                    Recognizing the importance of assembling a talented and focused
                                    team, Right Timing Animation Studios diligently recruited
                                    exceptional animators, directors, and artists who shared their
                                    passion for animation. Through collaboration, the team grew and
                                    fostered a culture of creativity and innovation.
                                </p>
                                <p className="mt-6">
                                    <strong>Early Successes and Industry Recognition</strong>
                                </p>
                                <p className="mt-1">
                                    Even before its official inception, RTA Studio garnered
                                    attention and interest from the animation industry. The founding
                                    members brought with them a wealth of experience and a proven
                                    track record, establishing trust and credibility.
                                </p>
                                <p className="mt-3">
                                    Having previously worked on notable projects and collaborated
                                    with renowned animation studios, the team earned recognition for
                                    their skills, expertise, and contributions to the industry.
                                    Their past experience included working on various animated
                                    films, television series, web series, and commercials.
                                </p>
                                <p className="mt-3">
                                    These early successes and industry recognition not only
                                    showcased the team's abilities but also instilled confidence in
                                    potential partners, investors, and collaborators. It served as a
                                    testament to their ability to deliver high-quality animation and
                                    compelling storytelling.
                                </p>
                                <p className="mt-6">
                                    <strong>Expansion and Future Prospects</strong>
                                </p>
                                <p className="mt-1 mb-2">
                                    With the foundation of early achievements, RTA Studio seized
                                    opportunities to expand their portfolio. The studio embarked on
                                    collaborations with well-established production companies,
                                    secured partnerships with major distributors, and explored
                                    innovative avenues beyond traditional animation.
                                </p>
                            </>
                        }
                    />
                    <h5>
                        Looking ahead, RTA Studio is poised to make a significant impact in the
                        animation industry. With their commitment to pushing boundaries, embracing
                        emerging technologies, and captivating storytelling, they are set to
                        entertain and inspire audiences worldwide with their imaginative and
                        visually stunning animated content.​
                    </h5>
                    <hr className="my-4 border-[rgba(0,0,0,0.15)]" />
                    <Accordion
                        header="THE PROCESS"
                        body={
                            <>
                                <p className="mt-2">Our process includes:</p>
                                <ol className="mt-1 mb-2 pl-5 [&>li]:mt-3 [&>li>p]:ml-2">
                                    <li>
                                        <p>
                                            Consultation: We start by discussing your project goals,
                                            timeline, and budget to determine the best approach for
                                            your animation project.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Concept Development: Our team will work with you to
                                            develop a concept that aligns with your brand and
                                            messaging.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Storyboarding and Scriptwriting: We will create a
                                            storyboard and script that outlines the narrative and
                                            visuals of your animation.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Animation: Our team will use their expertise to bring
                                            your animation to life using various 2D animation styles
                                            and techniques.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Organized Review and Feedback: We will keep you updated
                                            throughout the process and provide opportunities for
                                            feedback and revisions.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Final Delivery: Once the animation is complete, we will
                                            deliver the final product in the format of your choice.
                                        </p>
                                    </li>
                                </ol>
                            </>
                        }
                    />
                    <h5>
                        At Right Timing Animation Studios, we believe that collaboration is key. We
                        work closely with our clients to understand their vision and goals, and we
                        use our expertise to bring their ideas to life.
                    </h5>
                    <hr className="my-4 border-[rgba(0,0,0,0.15)]" />
                    <Accordion
                        header="WHY CHOOSE US?"
                        body={
                            <>
                                <ul className="pl-5 [&>li:not(:first-child)]:mt-4">
                                    <li>
                                        <p>
                                            <strong>Extensive Experience:</strong> With over 30
                                            years of experience in the animation industry, we have
                                            acquired a deep understanding of the craft and have
                                            honed our skills to deliver exceptional results. Our
                                            experience enables us to tackle various types of
                                            projects with confidence and expertise.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>Expert Team:</strong> Our team consists of
                                            highly skilled animators, artists, and designers who are
                                            passionate about their work. They bring creativity,
                                            technical proficiency, and attention to detail to every
                                            project, ensuring that the animations we produce are of
                                            the highest quality.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>Customized Approach:</strong> We understand that
                                            every project is unique, and we tailor our approach to
                                            meet your specific requirements. We take the time to
                                            understand your goals, target audience, and desired
                                            outcomes, allowing us to create animations that
                                            effectively communicate your message.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>Collaborative Process:</strong> We believe in
                                            working closely with our clients throughout the
                                            animation process. We value your input and actively
                                            involve you in the decision-making process, ensuring
                                            that your vision is brought to life. Our collaborative
                                            approach fosters open communication and leads to the
                                            development of animations that align with your
                                            expectations.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>High-Quality Animations:</strong> Our primary
                                            goal is to deliver animations that not only engage but
                                            also inform your audience. We combine storytelling,
                                            visual aesthetics, and technical expertise to create
                                            compelling and impactful animations that effectively
                                            convey your message.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <strong>
                                                Competitive Pricing and Fast Turnaround Times:
                                            </strong>{' '}
                                            We understand the importance of delivering projects on
                                            time and within budget. Our pricing is competitive,
                                            offering you value for your investment. Additionally, we
                                            strive to maintain efficient production processes,
                                            enabling us to deliver high-quality animations with fast
                                            turnaround times.
                                        </p>
                                    </li>
                                </ul>
                            </>
                        }
                    />
                    <h5>
                        By choosing us, you can benefit from our extensive experience, talented
                        team, customized approach, collaborative process, high-quality animations,
                        and efficient project execution. We are dedicated to delivering outstanding
                        results that meet and exceed your expectations.
                    </h5>
                </div>
            </div>
        </>
    );
};

export default About;
