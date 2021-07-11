import React from 'react';
import type { TextProps } from './types';

export const Text: React.FC<TextProps> = React.memo(({ size, children }) => {
    return <p className={`${size}`}>{children}</p>;
});
