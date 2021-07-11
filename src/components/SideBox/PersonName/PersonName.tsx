import React from 'react';

export const PersonName: React.FC = React.memo(() => {
    return (
        <h2 className="font-bold title-font uppercase text-white text-2xl tracking-wider">
            Sameer Waskar
        </h2>
    );
});

PersonName.displayName = 'PersonName';
