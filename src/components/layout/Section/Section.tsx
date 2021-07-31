import React, { HTMLProps } from 'react';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
    id: string;
}

export const Section: React.FC<Props> = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <section
                className="text-gray-400 bg-gray-800 md:ml-6 md:mb-6 shadow-lg"
                ref={ref}
                {...props}
            >
                {props.children}
            </section>
        );
    })
);

Section.displayName = 'Section';
