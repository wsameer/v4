import React from 'react';
import type { FeaturedProjectProps } from './types';

export const FeaturedProject: React.FC<FeaturedProjectProps> = React.memo(
    ({ leftContent, rightContent }) => {
        return (
            <div>
                <div className="text-left">{leftContent}</div>
                <div className="text-right">{rightContent}</div>
            </div>
        );
    }
);

FeaturedProject.displayName = 'FeaturedProject';
