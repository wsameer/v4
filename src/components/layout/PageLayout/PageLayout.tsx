import React, { HTMLProps } from 'react';

export const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(
    ({ children }) => {
        return (
            <div className="max-w mx-auto overflow-hidden">
                <div className="md:flex">{children}</div>
            </div>
        );
    }
);

PageLayout.displayName = 'PageLayout';
