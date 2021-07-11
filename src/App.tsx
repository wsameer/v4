import React from 'react';
import Hero from '@components/Hero';
import PageLayout from '@components/layout/PageLayout';
import Section from '@components/layout/Section';
import SideBox from '@components/SideBox';
import About from '@components/About';
import Contact from '@components/Contact';
import Experience from '@components/Experience';
import Work from '@components/Work';

const App: React.FC = () => {
    const sections = [
        {
            id: 'hero',
            component: <Hero />
        },
        {
            id: 'about',
            component: <About />
        },
        {
            id: 'experience',
            component: <Experience />
        },
        {
            id: 'works',
            component: <Work />
        },
        {
            id: 'contact',
            component: <Contact />
        }
    ];
    return (
        <div className="min-h-screen bg-gray-700 md:p-6">
            <PageLayout>
                <SideBox />
                <div className="flex flex-col">
                    {sections.map(({ id, component }, key) => (
                        <Section key={key} id={id}>
                            {component}
                        </Section>
                    ))}
                </div>
            </PageLayout>
        </div>
    );
};

export default App;
