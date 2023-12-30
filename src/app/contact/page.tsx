import 'server-only';

import clsx from 'clsx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | RTA',
    description: 'Contact Us | RTA',
};

const Contact = () => {
    return (
        <>
            <div
                className={clsx(
                    'bg-[url(/banner_contact.jpg)] bg-[0_100%] bg-cover',
                    'py-11 sm:py-20'
                )}>
                <h1 className="font-libre-franklin font-semibold text-white text-center">
                    CONTACT US
                </h1>
            </div>
            <div className="bg-white shadow-sm">
                <div
                    className={clsx(
                        'flex flex-col gap-6 max-w-content mx-auto text-body-light',
                        'px-5 py-8 sm:px-6 sm:py-12'
                    )}>
                    <div className={clsx('grid', 'grid-cols-1 md:grid-cols-2')}>
                        <div>
                            <h2 className="font-bold text-default">Get in Touch</h2>
                            <p className="mt-6">
                                For any business inquiries or additional information about RTA
                                Studios, please feel free to reach out to us via the following
                                contact details:
                            </p>
                            <p className="mt-6">
                                <b>Email:</b> rafael@rtanimations.com
                            </p>
                            <p>
                                <b>Phone:</b> +65 9040 0995
                            </p>
                            <p className="mt-6">
                                We are more than happy to assist you and provide any further
                                information you may need.
                            </p>
                            <p className="mt-6">We look forward to hearing from you!</p>
                            <p className="mt-6">
                                <b>Address:</b>
                            </p>
                            <p>
                                ​JBDF Bldg. Unit-B 9064 Paliparan Road, Paliparan I, Dasmariñas,
                                Cavite, 4114, Philippines
                            </p>
                        </div>
                    </div>
                </div>
                <iframe
                    className="w-full h-[400px] mt-4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.3638041899435!2d120.98606957595933!3d14.290282384597141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d6083e49a10d%3A0xa1ca3d4d7df5f70!2sJBDF%20Bldg!5e0!3m2!1sen!2skr!4v1688673204220!5m2!1sen!2skr"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
};

export default Contact;
