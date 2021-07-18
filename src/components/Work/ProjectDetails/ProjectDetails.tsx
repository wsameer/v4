import React from 'react';
import type { ProjectDescProps } from './types';

export const ProjectDetails: React.FC<ProjectDescProps> = ({
    title,
    description,
    techList,
    links
}) => {
    return (
        <div className="p-6 lg:p-2 shadow-8xl md:shadow-none">
            <h5 className="mb-1 text-base text-purple-400">Featured project</h5>
            <h3 className="text-xl md:text-2xl text-white font-bold">
                {title}
            </h3>
            <div className="my-6 p-0 lg:p-4 lg:shadow-8xl bg-transparent lg:bg-gray-900 rounded">
                <p className="text-base md:text-sm">{description}</p>
            </div>
            <div className="inline-block mb-2">
                {techList?.map((tech, index) => (
                    <span
                        key={index}
                        className="p-2 mr-2 rounded bg-purple-600 hover:bg-purple-700 text-white text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

ProjectDetails.displayName = 'ProjectDetails';
