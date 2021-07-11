import SectionTitle from '@components/common/SectionTitle';
import React from 'react';

export const Experience: React.FC = () => {
    return (
        <div className="mx-auto flex px-6 md:px-8 py-10 md:py-12 md:flex-row flex-col items-start">
            <SectionTitle>
                <span>Experience</span>
            </SectionTitle>
        </div>
    );
};

Experience.displayName = 'Experience';
