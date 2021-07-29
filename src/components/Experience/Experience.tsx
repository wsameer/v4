import React from 'react';
import SectionTitle from '@components/common/SectionTitle';
import Accordion from '@components/common/Accordion';
import AccordionItem from '@components/common/Accordion/AccordionItem';
import { AccordionProvider } from '@components/common/Accordion/AccordionContext';

export const Experience: React.FC = () => {
    const workHistory = [
        {
            index: 1,
            header: {
                tenure: 'Nov 2020 - Present',
                position: 'Senior Frontend Developer',
                organization: 'Medly Software Systems LLP.',
                logo: 'https://medly.com/favicon/apple-touch-icon.png'
            },
            content: [
                'Managed end to end design and development from the frontend perspective of Product Delivery app using React, Redux and Test Driven Development.',
                'Architected and implemented the barcode scanning module for Shipment sorting, Pickup and Packing departments reducing the RX error rate by 75%.',
                'Assisted in the design and development of the internal tools and B2B and B2C applications that Medly utilize to help deliver services to patients and partners'
            ]
        },
        {
            index: 2,
            header: {
                tenure: 'Aug 2020 - Nov 2020',
                position: 'Head of Development, FE',
                organization: 'Koru UX Design LLP.',
                logo: 'https://www.google.com/s2/favicons?sz=48&domain_url=koruux.com'
            },
            content: [
                'Efficiently driven forward the development and delivery of web projects and products, ensuring delivery to the required timescales and specifications.',
                'Guided the front-end team on technology strategy related to coding practices, continuous integration and automated deployment.',
                'Carved a roadmap for implementing best software engineering practices for higher code quality.'
            ]
        },
        {
            index: 3,
            header: {
                tenure: 'Apr 2017 - Aug 2020',
                position: 'Senior Software Engineer',
                organization: 'Securly Softwares Pvt Ltd.',
                logo: 'https://www.securly.com/site/assets/img/favicons/favicon-180x180.png'
            },
            content: [
                'Modernized the Securly Filtering products by migrating codebase from AngularJS to Angular 7 resulting in better runtime performance, modularity, security and smoother user experience.',
                'Single-handedly implemented the front-end of Securly 24 product, and commended for playing a crucial role in helping the team set up and integrate the unit testing framework.',
                'Worked collaboratively with cross-functional and overseas teams to deliver highly scalable and reusable components and expedited projects stuck in the backlog.'
            ]
        },
        {
            index: 4,
            header: {
                tenure: 'May 2015 - Apr 2017',
                position: 'Programmer Analyst',
                organization: 'Vizitech Solutions Pvt. Ltd.',
                logo: 'https://www.google.com/s2/favicons?sz=48&domain_url=vizitechsolutions.com'
            },
            content: [
                'Managed all phases of web application projects for a wide range of clients requiring interactive, transactional e-commerce sites; client coordination and handling documentation, system design, and integration.',
                'Developed landing pages, dashboards and online applications using HTML5/CSS3, LAMP stack, and Node.js scripting.',
                'Programmed tools and web components to automate and visualize the client’s internal processes bolstering efficiency by 40%.'
            ]
        }
    ];

    return (
        <div className="mx-auto p-6 md:px-10 md:py-12 items-start">
            <SectionTitle>
                <span>Experience</span>
            </SectionTitle>
            <AccordionProvider>
                <Accordion>
                    {workHistory.map((company, index) => (
                        <AccordionItem
                            key={index}
                            index={company.index}
                            header={company.header}
                            content={company.content}
                        />
                    ))}
                </Accordion>
            </AccordionProvider>
        </div>
    );
};

Experience.displayName = 'Experience';
