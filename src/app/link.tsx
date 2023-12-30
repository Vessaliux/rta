'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    href: string;
    children?: React.ReactNode;
    className?: string;
}

const ClientLink = ({ href, children, className, ...props }: Props) => {
    const pathname = usePathname();

    return (
        <Link
            className={clsx(
                className,
                'font-libre-franklin transition-all',
                pathname === href ? 'font-semibold text-default' : 'font-normal text-light '
            )}
            href={href}
            {...props}>
            {children}
        </Link>
    );
};

export default ClientLink;
