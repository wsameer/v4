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
        <div className="md:flex-shrink-0">
            <div className="p-10 md:px-4 w-full md:w-72 lg:w-80 bg-gray-800 shadow-lg">
                <Avatar height={'48'} width={'48'} srcFile={IMAGE_SRC} />
                <div className="my-4 flex flex-col items-center text-center justify-center">
                    <PersonName name={'Sameer Waskar'} />
                    <JobTitle value={'Software Engineer'} />
                    <Divider />
                    <Socials />
                </div>
            </div>
        </div>
    );
};

SideBox.displayName = 'SideBox';
