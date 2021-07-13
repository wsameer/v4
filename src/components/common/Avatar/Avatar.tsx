import React from 'react';
import type { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = React.memo(
    ({ srcFile, height, width }) => {
        return (
            <div className="flex items-center text-center justify-center">
                <img
                    className="h-48 w-48 rounded-full bg-purple-500 hover:bg-purple-600"
                    src={srcFile}
                    alt="Person Avatar"
                />
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
    height: '48',
    width: '48'
};
