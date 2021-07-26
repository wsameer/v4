import React from 'react';
import type { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = React.memo(
    ({ srcFile, width }) => {
        return (
            <div className="flex items-center text-center justify-center">
                <img
                    className="rounded-full bg-purple-500 hover:bg-purple-600"
                    src={srcFile}
                    alt="Person Avatar"
                    width={width}
                />
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';
