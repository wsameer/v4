import React, { FC } from 'react';
import { AccordionProvider } from './AccordionContext';
import type { AccordionProps } from './types';

export const Accordion: FC & AccordionProps = React.memo(({ children }) => {
    return <>{children}</>;
});

Accordion.displayName = 'Accordion';
