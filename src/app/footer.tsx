import 'server-only';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import imgLogo from '@/images/logo_black.png';
import { ROUTES } from '@/constants';

const Footer = () => {
    return (
        <div
            className={clsx(
                'flex justify-center gap-6 items-center fixed inset-x-0 bottom-0 bg-white select-none z-10',
                'flex-col sm:flex-row',
                'h-footer-mobile sm:h-footer'
            )}>
            <Image className="w-[150px] h-auto" src={imgLogo} alt="" />
            <div className={clsx('flex flex-col', 'gap-5 sm:gap-4', 'text-center sm:text-left')}>
                <div className={clsx('flex gap-4', 'flex-col sm:flex-row')}>
                    {ROUTES.map((route) => (
                        <Link className="font-semibold" key={route.href} href={route.href}>
                            {route.name.toLocaleUpperCase()}
                        </Link>
                    ))}
                </div>
                <p className="text-xs text-body-light">Copyright © 2023</p>
            </div>
        </div>
    );
};

export default Footer;
