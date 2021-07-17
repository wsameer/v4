import React from 'react';
import type { ProjectDescProps } from './types';

export const ProjectDetails: React.FC<ProjectDescProps> = ({
    title,
    description,
    techList,
    links
}) => {
    return (
        <div className="mb-1">
            <h5 className="mb-1 text-base text-purple-400">Featured project</h5>
            <h3 className="mb-2 text-xl md:text-2xl text-white font-bold">
                {title}
            </h3>
            <div className="shadow-8xl bg-gray-900 rounded p-4">
                <p className="text-sm md:text-base">{description}</p>
            </div>
            <div className="mt-4 inline-block">
                {techList?.map((tech, index) => (
                    <span
                        key={index}
                        className="p-2 m-1 rounded bg-purple-600 hover:bg-purple-700 text-white text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

ProjectDetails.displayName = 'ProjectDetails';
