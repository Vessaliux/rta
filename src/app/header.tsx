import 'server-only';

import clsx from 'clsx';
import Image from 'next/image';
import Link from './link';
import NavModal from './nav-modal';
import imgLogo from '@/images/logo_colored.png';
import { ROUTES } from '@/constants';

const Header = () => {
    return (
        <>
            <div className={clsx('pt-10 pb-6 justify-center select-none', 'hidden sm:flex')}>
                <Image src={imgLogo} alt="" height={120} priority />
            </div>
            <nav
                className={clsx(
                    'flex items-center gap-8 sticky top-0 w-full bg-white overflow-hidden select-none shadow-md transition-all z-50',
                    'justify-between sm:justify-center',
                    'h-16 sm:h-12',
                    'px-2 sm:px-0'
                )}>
                {ROUTES.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={clsx('text-sm', 'hidden sm:block')}>
                        {route.name.toLocaleUpperCase()}
                    </Link>
                ))}
                <Link className="sm:hidden" href="/">
                    <Image src={imgLogo} alt="" height={38} />
                </Link>

                <NavModal />
            </nav>
        </>
    );
};

export default Header;
