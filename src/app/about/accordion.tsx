'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface Props {
    header: string;
    body: React.ReactNode;
}

const Main = ({ header, body }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Accordion
            open={isOpen}
            icon={
                isOpen ? <ExpandLess className="text-3xl" /> : <ExpandMore className="text-3xl" />
            }
            placeholder="">
            <AccordionHeader
                className={clsx(
                    'px-5 py-4 border-solid border-[#dee2e6] font-libre-franklin rounded-lg text-xl transition-all',
                    isOpen ? 'bg-[#d5d5d5]' : 'bg-[#d5d5d599] hover:bg-[#d5d5d5]',
                    isOpen && '[border-bottom-left-radius:0] [border-bottom-right-radius:0]'
                )}
                onClick={() => setIsOpen(!isOpen)}
                placeholder="">
                {header}
            </AccordionHeader>
            <AccordionBody className="px-5 py-4 bg-white border border-solid border-[#dee2e6] font-normal text-base text-body">
                {body}
            </AccordionBody>
        </Accordion>
    );
};

export default Main;
