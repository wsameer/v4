import SectionTitle from '@components/common/SectionTitle';
import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div className="mx-auto flex p-6 md:px-10 md:py-12 md:flex-row flex-col items-start">
            <SectionTitle>
                <span>Contact Me</span>
            </SectionTitle>
        </div>
    );
};

Contact.displayName = 'Contact';
