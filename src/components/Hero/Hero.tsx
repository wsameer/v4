import Button from '@components/common/Button';
import Text from '@components/common/Text';
import React from 'react';
import type { Props } from './types';

export const Hero: React.FC<Props> = ({ executeScroll }) => {
    return (
        <div className="mx-auto flex px-6 py-12 md:px-10 md:flex-row flex-col items-start">
            <div className="md:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-left">
                <Text className="text-base lg:text-xl">Hello! I'm</Text>
                <h1 className="title-font text-6xl lg:text-7xl mt-3 md:mt-2 font-bold text-white">
                    Sameer.
                </h1>
                <h1 className="title-font text-5xl md:text-6xl lg:text-7xl mt-2 mb-6 font-bold text-gray-400">
                    I build things for the web.
                </h1>
                <Text className="text-base mb-6 leading-relaxed lg:w-3/5">
                    I'm a software engineer who specializes in
                    building exceptional digital experiences. Currently, I'm a
                    Senior Software Engineer at{' '}
                    <a
                        href="https://www.medly.com"
                        rel="noreferrer"
                        target="_blank"
                        className="text-purple-400"
                    >
                        Medly
                    </a>{' '}
                    focused on building a full-service, digital pharmacy.
                </Text>
                <div className="flex">
                    <Button variant="solid" onClick={() => executeScroll(4)}>
                        <span>Let's Talk</span>
                    </Button>
                    <Button
                        variant="solid"
                        className="ml-4"
                        onClick={() => executeScroll(3)}
                    >
                        <span>Check my work</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

Hero.displayName = 'Hero';
