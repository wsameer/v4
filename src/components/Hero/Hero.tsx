import React from 'react';

export const Hero: React.FC = () => {
    return (
        <div className="mx-auto flex px-8 py-12 md:flex-row flex-col items-start">
            <div className="md:flex-grow md:w-1/2 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-left">
                <h3 className="text-lg lg:text-xl">Hi there! I am</h3>
                <h1 className="title-font text-5xl md:text-6xl my-4 font-medium text-white">
                    Sameer Waskar
                </h1>
                <p className="mb-8 leading-relaxed">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed tacos poke beard tote bag.
                    Heirloom echo park mlkshk tote bag selvage hot chicken
                    authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

Hero.displayName = 'Hero';
