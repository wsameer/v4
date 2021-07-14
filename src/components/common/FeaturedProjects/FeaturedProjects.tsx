import React from 'react';

type Props = {
    leftContent: any;
    rightContent: any;
};

export const FeaturedProjects: React.FC<Props> = React.memo(
    ({ leftContent, rightContent }) => {
        return (
            <div>
                {leftContent}
                {rightContent}
            </div>
        );
    }
);
