import React from 'react';
import { GitHub, Twitter, Instagram, Linkedin } from 'react-feather';
import SocialLink from './SocialLink';

export const Socials: React.FC = React.memo(() => {
    const SOCIAL_ACCOUNTS = [
        {
            id: 1,
            logo: <GitHub size={20} />,
            url: 'https://github.com/wsameer',
            label: 'GitHub'
        },
        {
            id: 2,
            logo: <Linkedin size={20} />,
            url: 'https://www.linkedin.com/in/wsameer',
            label: 'LinkedIn'
        },
        {
            id: 3,
            logo: <Instagram size={20} />,
            url: 'https://www.instagram.com/the_savage_lens/',
            label: 'Instagram'
        },
        {
            id: 4,
            logo: <Twitter size={20} />,
            url: 'https://twitter.com/thesavagelens',
            label: 'Twitter'
        }
    ];
    return (
        <div className="flex justify-between">
            {SOCIAL_ACCOUNTS.map((data, index) => (
                <SocialLink key={index} {...data} />
            ))}
        </div>
    );
});

Socials.displayName = 'Socials';
