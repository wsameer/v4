import React, { ReactElement } from 'react';

type Props = {
    url: string;
    logo: ReactElement<any>;
};

export const SocialLink: React.FC<Props> = ({ url, logo }) => {
    return (
        <a
            className="mt-2 mx-4 text-gray-300"
            rel="noreferrer"
            href={url}
            target="_blank"
        >
            <span>{logo}</span>
        </a>
    );
};
SocialLink.displayName = 'SocialLink';
