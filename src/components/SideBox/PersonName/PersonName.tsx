import React from 'react';

export const PersonName: React.FC<{ name: string }> = React.memo(({ name }) => {
    return (
        <h2 className="font-bold title-font uppercase text-white text-2xl tracking-wider">
            {name}
        </h2>
    );
});

PersonName.displayName = 'PersonName';
