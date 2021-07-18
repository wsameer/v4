import React from 'react';
import type { FeaturedProjectProps } from './types';

export const FeaturedProject: React.FC<FeaturedProjectProps> = React.memo(
    ({ leftContent, rightContent }) => {
        return (
            <div className="mb-8 md:mb-10 grid grid-cols-12 items-center">
                <div className="text-left row-start-1 row-end-n1 col-start-1 col-end-n1 lg:col-start-1 lg:col-end-7">
                    {leftContent}
                </div>
                <div className="text-left md:text-right row-start-1 row-end-n1 col-start-1 col-end-n1 lg:col-start-6 lg:col-end-n1">
                    {rightContent}
                </div>
            </div>
        );
    }
);

FeaturedProject.displayName = 'FeaturedProject';
