import React from 'react';
import { ChevronDown } from 'react-feather';
import Avatar from '../../Avatar';
import { useAccordion } from '../AccordionContext';

export type AccordionHeaderProps = {
    organization: string;
    tenure: string;
    logo: string;
    position: string;
};

export const AccordionHeader: React.FC<
    AccordionHeaderProps & { index: number }
> = ({ index, organization, tenure, logo, position }) => {
    const { activeIndex, toggleAccordion } = useAccordion();
    console.log(activeIndex, index);
    return (
        <div
            className="accordion-header flex items-center"
            onClick={() => toggleAccordion(index)}
        >
            <div className="flex flex-grow items-center">
                <div className="flex-grow-0 flex-shrink-0 mr-4 avatar">
                    <Avatar srcFile={logo} width="48" />
                </div>
                <div className="content">
                    <p className="text-xs font-medium mb-1">{tenure}</p>
                    <h3 className="font-bold text-base text-gray-300 md:text-xl">
                        {position}
                    </h3>
                    <h5 className="font-semibold text-sm md:text-lg text-gray-500">
                        {organization}
                    </h5>
                </div>
            </div>
            <div className="action hidden md:block flex-grow-0 flex-shrink-0">
                <button className="flex items-center justify-center relative w-9 h-9 rounded-lg focus:outline-none text-gray-400 hover:bg-gray-900 group">
                    <ChevronDown
                        height="16"
                        className={`transition ${
                            activeIndex === index ? `rotate-0` : `rotate-90`
                        }`}
                    />
                </button>
            </div>
        </div>
    );
};

AccordionHeader.displayName = 'AccordionHeader';
