import React from 'react';
import SectionTitle from '@components/common/SectionTitle';

export const Experience: React.FC = () => {
    return (
        <div className="mx-auto p-6 md:px-10 md:py-12 items-start">
            <SectionTitle>
                <span>Experience</span>
            </SectionTitle>
            <div className="mt-2"></div>
        </div>
    );
};

Experience.displayName = 'Experience';
