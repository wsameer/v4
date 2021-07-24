import Avatar from '@components/common/Avatar';
import Socials from '@components/common/Socials';
import React from 'react';
import JobTitle from './JobTitle';
import PersonName from './PersonName';
import { IMAGE_SRC } from './constant';

const Divider: React.FC = () => (
    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
);

export const SideBox: React.FC = () => {
    return (
        <div className="md:w-72 md:fixed md:flex-shrink-0">
            <div className="p-10 md:px-4 w-full md:w-72 lg:w-80 bg-gray-800 shadow-lg">
                <Avatar height={'48'} width={'48'} srcFile={IMAGE_SRC} />
                <div className="mt-4 flex flex-col items-center text-center justify-center">
                    <PersonName name={'Sameer Waskar'} />
                    <JobTitle value={'Software Engineer'} />
                    <Divider />
                    <Socials />
                </div>
            </div>
            <div className="pb-8 md:p-10 md:mt-4 mb-4 md:px-4 w-full md:w-72 lg:w-80 bg-gray-800 shadow-lg text-center">
                <a
                    href="https://drive.google.com/open?id=1FcHm8QjFCrSFgZBs3eJbNCv8yurd-iy3"
                    target="_blank"
                    className="inline-flex text-white bg-transparent hover:transparent border-2 border-purple-700 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded-full text-base md:text-lg"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

SideBox.displayName = 'SideBox';
