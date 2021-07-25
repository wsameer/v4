import React from 'react';
import type { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = React.memo(
    ({ srcFile, height }) => {
        return (
            <div className="flex items-center text-center justify-center">
                <img
                    className={`h-${height} w-${height} rounded-full bg-purple-500 hover:bg-purple-600`}
                    src={srcFile}
                    alt="Person Avatar"
                />
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
    height: '48'
};
