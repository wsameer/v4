import Avatar from '@components/common/Avatar';
import { SocialLink } from '@components/common/SocialLink/SocialLink';
import React from 'react';
import { GitHub, Twitter, Instagram, Linkedin } from 'react-feather';
import { IMAGE_SRC } from './constant';

export const SideBox: React.FC = () => {
    const SOCIAL_ACCOUNTS = [
        {
            id: 1,
            logo: <GitHub size={20} />,
            url: 'https://github.com/wsameer'
        },
        {
            id: 2,
            logo: <Linkedin size={20} />,
            url: 'https://www.linkedin.com/in/wsameer'
        },
        {
            id: 3,
            logo: <Instagram size={20} />,
            url: 'https://www.instagram.com/the_savage_lens/'
        },
        { id: 4, logo: <Twitter size={20} />, url: '@thesavagelens' }
    ];
    return (
        <div className="md:flex-shrink-0 shadow-lg">
            <div className="p-10 md:px-4 h-full w-full md:w-80 bg-gray-800">
                <Avatar height={'48'} width={'48'} srcFile={IMAGE_SRC} />
                <div className="my-4 flex flex-col items-center text-center justify-center">
                    
                    <h3 className="font-medium text-gray-400 text-lg m-3">
                        Software Engineer
                    </h3>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <div className="flex justify-between">
                        {SOCIAL_ACCOUNTS.map(({ url, logo }, index) => (
                            <SocialLink key={index} url={url} logo={logo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
