import React from 'react';
import type { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = React.memo(
    ({ srcFile, height, width }) => {
        return (
            <div className="flex items-center text-center justify-center">
                <img
                    className={`h-${height} w-${width} rounded-full`}
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
