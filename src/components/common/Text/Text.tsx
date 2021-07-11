import React from 'react';
import type { TextProps } from './types';

export const Text: React.FC<TextProps> = React.memo(
    ({ size, classes, children }) => {
        return <p className={`${size} ${classes}`}>{children}</p>;
    }
);
