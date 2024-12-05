'use client';

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../data/confetti.json';

type LottieProps = {
    loop?: boolean;
    autoplay?: boolean;
    width?: number;
    height?: number;
};

const LottieAnimation: React.FC<LottieProps> = ({
    loop = true,
    autoplay = true,
    width = 400,
    height = 400,
}) => {
    const defaultOptions = {
        loop,
        autoplay,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    );
};

export default LottieAnimation;
