'use client';

import Carousel from 'react-material-ui-carousel';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Main = ({ children, className, ...props }: Props) => {
    return (
        <Carousel
            className={className}
            animation="slide"
            navButtonsAlwaysVisible={true}
            indicators={false}
            interval={5000}
            {...props}>
            {children}
        </Carousel>
    );
};

export default Main;
