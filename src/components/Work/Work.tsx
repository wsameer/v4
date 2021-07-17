import FeaturedProject from '@components/common/FeaturedProject';
import SectionTitle from '@components/common/SectionTitle';
import React from 'react';
import ProjectDetails from './ProjectDetails';
import type { ProjectDescProps, ProjectLink } from './ProjectDetails/types';

export const Work: React.FC = () => {
    const projectOne: ProjectDescProps = {
            title: 'Octoprofile Plus',
            description:
                'A nicer look at your GitHub Profile! With themes, charts and React! Search for your mentors or peers profile, sort through their repos by forks, stars and sizes, toggle the view between list and grid and view some very informative charts.',
            techList: ['Reactjs', 'GraphQL', 'Github API'],
            links: [] as Array<ProjectLink>
        },
        projectTwo: ProjectDescProps = {
            title: 'Reakt Dashboard',
            description:
                'A simple dashboard app consisting of 3 small React learner projects: Weather app with live timer, Premier League table with live updates and a Todo app with dark skin',
            techList: ['Reactjs', 'GraphQL', 'Github API'],
            links: [] as Array<ProjectLink>
        };

    return (
        <div className="mx-auto px-6 md:px-8 py-10 md:py-12">
            <SectionTitle>
                <span>Some things I've built</span>
            </SectionTitle>
            <FeaturedProject
                leftContent={
                    <ProjectDetails
                        title={projectOne.title}
                        description={projectOne.description}
                        techList={projectOne.techList}
                        links={projectOne.links}
                    />
                }
                rightContent={
                    <a href="" target="_blank">
                        <img
                            src="./img/octoprofile-plus.png"
                            alt="Octo Profile Plus Image"
                            className="shadow-7xl opacity-50 hover:opacity-100"
                        />
                    </a>
                }
            />
            <FeaturedProject
                leftContent={
                    <a href="" target="_blank">
                        <img
                            src="./img/reakt-dashboard-image.png"
                            alt="Reakt Dashboard Image"
                            className="shadow-7xl opacity-50 hover:opacity-100"
                        />
                    </a>
                }
                rightContent={
                    <ProjectDetails
                        title={projectTwo.title}
                        description={projectTwo.description}
                        techList={projectTwo.techList}
                        links={projectTwo.links}
                    />
                }
            />
        </div>
    );
};

Work.displayName = 'Work';
