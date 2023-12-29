'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@mui/icons-material';
import { ROUTES } from '@/constants';

const NavModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [isOpen]);

    return (
        <>
            <a
                className="sm:hidden"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                <Menu className="!text-5xl text-body" />
            </a>
            <div
                className={clsx(
                    'fixed inset-0 top-16 bg-white transition-all',
                    'flex flex-col gap-4 justify-center items-center sm:hidden',
                    isOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
                )}>
                {ROUTES.map((route) => (
                    <Link
                        className={clsx(
                            'font-libre-franklin text-3xl',
                            pathname === route.href
                                ? 'font-bold before:content-["•"] before:mr-2'
                                : 'font-light'
                        )}
                        key={route.href}
                        href={route.href}
                        onClick={() => setIsOpen(false)}>
                        {route.name.toLocaleUpperCase()}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NavModal;
