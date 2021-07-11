import React from 'react';

type Props = {
    id: string;
};

export const Section: React.FC<Props> = React.memo(({ id, children }) => {
    return (
        <section id={id} className="text-gray-400 bg-gray-800 md:ml-6">
            {children}
        </section>
    );
});

Section.displayName = 'Section';
