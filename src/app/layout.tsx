import clsx from 'clsx';
import { Noto_Sans, Libre_Franklin } from 'next/font/google';
import Header from './header';
import Footer from './footer';
import './globals.css';

import type { Metadata } from 'next';

const fontNotoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-noto-sans',
});
const fontLibreFranklink = Libre_Franklin({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-libre-franklin',
});

export const metadata: Metadata = {
    title: 'RTA',
    description: 'RTA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={clsx('bg-white', fontNotoSans.variable, fontLibreFranklink.variable)}>
                <Header />
                <main>
                    <div className="relative mb-[theme(height.footer-mobile)] sm:mb-[theme(height.footer)] z-20">
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
