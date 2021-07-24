import Button from '@components/common/Button';
import Text from '@components/common/Text';
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <div className="mx-auto flex p-6 md:px-10 md:py-12 md:flex-row flex-col items-start">
            <div className="md:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-left">
                <Text size="text-base" classes="text-base lg:text-xl">
                    Hello! I'm
                </Text>
                <h1 className="title-font text-4xl md:text-6xl lg:text-7xl mt-3 md:mt-6 font-bold text-white">
                    Sameer Waskar.
                </h1>
                <h1 className="title-font text-4xl md:text-6xl lg:text-7xl mt-2 mb-6 font-bold text-gray-600">
                    I build things for the web.
                </h1>
                <Text
                    size="text-base"
                    classes={'mb-6 leading-relaxed lg:w-3/5'}
                >
                    I'm a Pune-based software engineer who specializes in
                    building exceptional digital experiences. Currently, I'm a
                    Senior Software Engineer at{' '}
                    <a
                        href="https://www.medly.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-purple-400"
                    >
                        Medly
                    </a>{' '}
                    focused on building a full-service, digital pharmacy.
                </Text>
                <div className="flex">
                    <Button variant="solid">
                        <span>Let's Talk</span>
                    </Button>
                    <Button variant="solid" className="ml-4">
                        <span>Check my work</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

Hero.displayName = 'Hero';
