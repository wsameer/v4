import React from 'react';
import Hero from '@components/Hero';
import PageLayout from '@components/layout/PageLayout';
import Section from '@components/layout/Section';
import SideBox from '@components/SideBox';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-700 md:p-6">
            <PageLayout>
                <SideBox />
                <Section id="hero">
                    <Hero />
                </Section>
            </PageLayout>
        </div>
    );
};

export default App;
