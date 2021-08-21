import React from 'react';
import type { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = React.memo(
    ({ srcFile, width, bgColor }) => {
        return (
            <div className="flex items-center text-center justify-center">
                <img
                    className={`rounded-full bg-${bgColor}-600`}
                    src={srcFile}
                    alt="Person Avatar"
                    width={width}
                    loading="lazy"
                />
            </div>
        );
    }
);

Avatar.defaultProps = {
    bgColor: 'gray',
    width: '20'
};

Avatar.displayName = 'Avatar';
