import SectionTitle from '@components/common/SectionTitle';
import React from 'react';

export const About: React.FC = () => {
    return (
        <div className="mx-auto p-6 md:px-10 md:py-12 items-start">
            <SectionTitle>
                <span>About Me</span>
            </SectionTitle>
            <p className="mb-2 text-base md:text-lg">
                I am a software developer based out of{' '}
                <a
                    href="https://goo.gl/maps/8hnGQVDp1spYLyzP7"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-semibold text-purple-400"
                >
                    Pune, India
                </a>
                . With ruminations of using technology to make a positive impact
                on a human life, I have invested over a{' '}
                <span className="font-semibold text-purple-400">decade</span> in
                learning and practicing software development to distil complex
                technical ideas into user-friendly interfaces.
            </p>
            <p className="mb-2 text-base md:text-lg">
                Over the past{' '}
                <span className="font-semibold text-purple-400">7 years</span>,
                I have had the privilege of working in{' '}
                <a
                    href="https://vizitechsolutions.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-semibold text-purple-400"
                >
                    finance
                </a>
                ,{' '}
                <a
                    href="https://www.securly.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-semibold text-purple-400"
                >
                    student safety
                </a>
                , and{' '}
                <a
                    href="https://www.koruux.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-semibold text-purple-400"
                >
                    healthcare
                </a>{' '}
                domains.
            </p>
            <p className="mb-2 text-base md:text-lg">
                These days, my main focus is to build platform, tools and
                products at{' '}
                <a
                    href="https://www.medly.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-semibold text-purple-400"
                >
                    Medly
                </a>{' '}
                to digitalize their pharmacy experience.
            </p>
            <p className="mb-2 text-base md:text-lg">
                Here are a few technologies I've been working with recently:
            </p>
            <div>
                <ul className="grid grid-cols-2 list-disc list-inside">
                    <li className="text-sm md:text-base my-2">
                        JavaScript (ES6+)
                    </li>
                    <li className="text-sm md:text-base my-2">React Redux</li>
                    <li className="text-sm md:text-base my-2">
                        Node.js, Express
                    </li>
                    <li className="text-sm md:text-base my-2">
                        NextJS, Gatsby
                    </li>
                    <li className="text-sm md:text-base my-2">Angular</li>
                    <li className="text-sm md:text-base my-2">
                        Styled Components
                    </li>
                </ul>
            </div>
        </div>
    );
};

About.displayName = 'About';
