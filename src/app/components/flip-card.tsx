'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

interface Props {
    front: React.ReactNode;
    back: React.ReactNode;
}

const FlipCard = ({ front, back }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flex justify-center items-center relative px-4 py-6 bg-white border border-solid border-[rgba(0,0,0,0.1)] rounded-sm text-center"
            onMouseEnter={() => {
                setIsFlipped(true);
            }}
            onMouseLeave={() => {
                setIsFlipped(false);
            }}>
            <div
                className={clsx(
                    'text-center transition-all [backface-visibility:hidden]',
                    isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0)]'
                )}>
                {front}
            </div>
            <div
                className={clsx(
                    'text-center absolute inset-0 transition-all [backface-visibility:hidden]',
                    isFlipped ? '[transform:rotateY(0)]' : '[transform:rotateY(180deg)]'
                )}>
                <div className="flex justify-center items-center absolute inset-0 px-4">{back}</div>
            </div>
        </div>
    );
};

export default FlipCard;
