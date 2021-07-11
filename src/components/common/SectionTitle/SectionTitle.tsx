import React from 'react';

export const SectionTitle: React.FC = React.memo(() => {
    return <h2 className="text-3xl md:text-4xl uppercase"></h2>;
});

SectionTitle.displayName = 'SectionTitle';
