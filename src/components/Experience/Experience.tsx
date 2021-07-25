import React, { useCallback, useState } from 'react';
import SectionTitle from '@components/common/SectionTitle';
import Avatar from '@components/common/Avatar';
import { ChevronDown, ChevronUp } from 'react-feather';

export const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(null);

    const toggleAccordion = useCallback(
        (index: number) => (activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)),
        [setActiveIndex, activeIndex]
    );

    return (
        <div className="mx-auto p-6 md:px-10 md:py-12 items-start">
            <SectionTitle>
                <span>Experience</span>
            </SectionTitle>
            <div className="accordion">
                <div className="accordion-item mb-4 p-4 lg:p-2 shadow-8xl md:shadow-none md:hover:shadow-8xl">
                    <div
                        className="accordion-header flex items-center"
                        onClick={() => toggleAccordion(1)}
                    >
                        <div className="flex flex-grow items-center">
                            <div className="flex-grow-0 flex-shrink-0 mr-4 avatar">
                                <Avatar srcFile="https://i.pravatar.cc/30" height="12" />
                            </div>
                            <div className="content">
                                <p className="text-xs font-medium mb-1">Nov 2020 - Present</p>
                                <h3 className="font-bold text-base text-gray-300 md:text-xl">
                                    Senior Frontend Developer
                                </h3>
                                <h5 className="font-semibold text-sm md:text-lg text-gray-500">
                                    Medly Software Systems LLP.
                                </h5>
                            </div>
                        </div>
                        <div className="action hidden md:block flex-grow-0 flex-shrink-0">
                            <button
                                className="flex items-center justify-center relative w-9 h-9 rounded-lg focus:outline-none text-gray-400 hover:bg-gray-900 group"
                                onClick={() => toggleAccordion(1)}
                            >
                                {activeIndex === 1 ? (
                                    <ChevronUp height="16" />
                                ) : (
                                    <ChevronDown height="16" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`accordion-content my-2 ml-4 ${
                            activeIndex === 1 ? 'h-full' : 'hidden'
                        }`}
                    >
                        <ul className="p-2 list-disc list-outside">
                            <li className="text-sm md:text-md">
                                Managed end to end design and development from the frontend
                                perspective of Product Delivery app using React, Redux and Test
                                Driven Development.
                            </li>
                            <li className="text-sm md:text-md">
                                Architected and implemented the barcode scanning module for Shipment
                                sorting, Pickup and Packing departments reducing the RX error rate
                                by 75%.
                            </li>
                            <li className="text-sm md:text-md">
                                Assisted in the design and development of the internal tools and B2B
                                and B2C applications that Medly utilize to help deliver services to
                                patients and partners
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item mb-4 p-4 lg:p-2 shadow-8xl md:shadow-none md:hover:shadow-8xl">
                    <div
                        className="accordion-header flex items-center"
                        onClick={() => toggleAccordion(2)}
                    >
                        <div className="flex flex-grow items-center">
                            <div className="flex-grow-0 flex-shrink-0 mr-4 avatar">
                                <Avatar srcFile="https://i.pravatar.cc/30" height="12" />
                            </div>
                            <div className="flex-grow-1 flex-shrink-1 content ">
                                <p className="text-xs font-medium mb-1">Aug 2020 - Nov 2020</p>
                                <h3 className="font-bold text-base text-gray-300 md:text-xl">
                                    Head of Development, FE
                                </h3>
                                <h5 className="font-semibold text-sm md:text-lg text-gray-500">
                                    Koru UX Design LLP.
                                </h5>
                            </div>
                        </div>
                        <div className="action hidden md:block flex-grow-0 flex-shrink-0">
                            <button
                                className="flex items-center justify-center relative w-9 h-9 rounded-lg focus:outline-none text-gray-400 hover:bg-purple-700 group"
                                onClick={() => toggleAccordion(2)}
                            >
                                <ChevronDown height="16" />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`accordion-content my-2 ml-4 ${
                            activeIndex === 2 ? 'h-full' : 'hidden'
                        }`}
                    >
                        <ul className="p-2 list-disc list-outside">
                            <li className="text-sm md:text-md">
                                Efficiently driven forward the development and delivery of web
                                projects and products, ensuring delivery to the required timescales
                                and specifications.
                            </li>
                            <li className="text-sm md:text-md">
                                Guided the front-end team on technology strategy related to coding
                                practices, continuous integration and automated deployment.
                            </li>
                            <li className="text-sm md:text-md">
                                Carved a roadmap for implementing best software engineering
                                practices for higher code quality.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item mb-4 p-4 lg:p-2 shadow-8xl md:shadow-none md:hover:shadow-8xl">
                    <div
                        className="accordion-header flex items-center"
                        onClick={() => toggleAccordion(3)}
                    >
                        <div className="flex flex-grow items-center">
                            <div className="flex-grow-0 flex-shrink-0 mr-4 avatar">
                                <Avatar srcFile="https://i.pravatar.cc/30" height="12" />
                            </div>
                            <div className="flex-grow-1 flex-shrink-1 content ">
                                <p className="text-xs font-medium mb-1">Apr 2017 - Aug 2020</p>
                                <h3 className="font-bold text-base text-gray-300 md:text-xl">
                                    Senior Software Engineer
                                </h3>
                                <h5 className="font-semibold text-sm md:text-lg text-gray-500">
                                    Securly Softwares Pvt Ltd.
                                </h5>
                            </div>
                        </div>

                        <div className="action hidden md:block flex-grow-0 flex-shrink-0">
                            <button
                                className="flex items-center justify-center relative w-9 h-9 rounded-lg focus:outline-none text-gray-400 hover:bg-purple-700 group"
                                onClick={() => toggleAccordion(3)}
                            >
                                <ChevronDown height="16" />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`accordion-content my-2 ml-4 ${
                            activeIndex === 3 ? 'h-full' : 'hidden'
                        }`}
                    >
                        <ul className="p-2 list-disc list-outside">
                            <li className="text-sm md:text-md">
                                Modernized the Securly Filtering products by migrating codebase from
                                AngularJS to Angular 7 resulting in better runtime performance,
                                modularity, security and smoother user experience.
                            </li>
                            <li className="text-sm md:text-md">
                                Single-handedly implemented the front-end of Securly 24 product, and
                                commended for playing a crucial role in helping the team set up and
                                integrate the unit testing framework.
                            </li>
                            <li className="text-sm md:text-md">
                                Worked collaboratively with cross-functional and overseas teams to
                                deliver highly scalable and reusable components and expedited
                                projects stuck in the backlog.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion-item mb-4 p-4 lg:p-2 shadow-8xl md:shadow-none md:hover:shadow-8xl">
                    <div
                        className="accordion-header flex items-center"
                        onClick={() => toggleAccordion(4)}
                    >
                        <div className="flex flex-grow items-center">
                            <div className="flex-grow-0 flex-shrink-0 mr-4 avatar">
                                <Avatar srcFile="https://i.pravatar.cc/30" height="12" />
                            </div>
                            <div className="flex-grow-1 flex-shrink-1 content ">
                                <p className="text-xs font-medium mb-1">May 2015 - Apr 2017</p>
                                <h3 className="font-bold text-base text-gray-300 md:text-xl">
                                    Programmer Analyst
                                </h3>
                                <h5 className="font-semibold text-sm md:text-lg text-gray-500">
                                    Vizitech Solutions Pvt. Ltd.
                                </h5>
                            </div>
                        </div>
                        <div className="action hidden md:block flex-grow-0 flex-shrink-0">
                            <button
                                className="flex items-center justify-center relative w-9 h-9 rounded-lg focus:outline-none text-gray-400 hover:bg-purple-700 group"
                                onClick={() => toggleAccordion(4)}
                            >
                                <ChevronDown height="16" />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`accordion-content my-2 ml-4 ${
                            activeIndex === 4 ? 'h-full' : 'hidden'
                        }`}
                    >
                        <ul className="p-2 list-disc list-outside">
                            <li className="text-sm md:text-md">
                                Managed all phases of web application projects for a wide range of
                                clients requiring interactive, transactional e-commerce sites;
                                client coordination and handling documentation, system design, and
                                integration.
                            </li>
                            <li className="text-sm md:text-md">
                                Developed landing pages, dashboards and online applications using
                                HTML5/CSS3, LAMP stack, and Node.js scripting.
                            </li>
                            <li className="text-sm md:text-md">
                                Programmed tools and web components to automate and visualize the
                                client’s internal processes bolstering efficiency by 40%.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Experience.displayName = 'Experience';
