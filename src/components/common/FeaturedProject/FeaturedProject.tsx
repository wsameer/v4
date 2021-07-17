import React from 'react';
import type { FeaturedProjectProps } from './types';

export const FeaturedProject: React.FC<FeaturedProjectProps> = React.memo(
    ({ leftContent, rightContent }) => {
        return (
            <div className="mb-10 grid grid-cols-12 items-center">
                <div className="text-left md:row-start-1 md:row-end-n1 md:col-start-1 md:col-end-7">
                    {leftContent}
                </div>
                <div className="text-right md:row-start-1 md:row-end-n1 md:col-start-6 md:col-end-n1">
                    {rightContent}
                </div>
            </div>
        );
    }
);

FeaturedProject.displayName = 'FeaturedProject';
