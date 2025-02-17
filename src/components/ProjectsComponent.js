import React from 'react';
import useLanguage from '../hooks/UseLanguage';

const ProjectCard = ({ image, technologies, title, description, liveLink, cachedLink }) => (
    <div className="border border-[#abb2bf] flex-col justify-start items-start w-full md:max-w-[330px]">
        <img className="w-full h-[201px] object-cover border-b border-[#abb2bf]" src={image} alt={title} />
        <div className="self-stretch p-2 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
                <div key={index} className="text-[#abb2bf] text-sm font-normal font-['Fira Code']">{tech}</div>
            ))}
        </div>
        <div className="self-stretch p-4 border-t border-[#abb2bf] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-white text-xl md:text-2xl font-medium font-['Fira Code']">{title}</div>
            <div className="self-stretch text-[#abb2bf] text-sm md:text-base font-normal font-['Fira Code']">{description}</div>
            <div className="flex flex-wrap gap-4">
                {liveLink && (
                    <div className="px-4 py-2 border border-[#c778dd] flex items-center">
                        <div className="text-white text-sm md:text-base font-medium font-['Fira Code']">Github {"<~>"}</div>
                    </div>
                )}

            </div>
        </div>
    </div>
);

const ProjectsComponent = () => {

    const { language, data, loading, error } = useLanguage()

    if (loading)
        return;

    if (error)
        return;

    return (
        <div className="w-full bg-[#282C33]" id='projects'>
            <div className='max-w-[1027px] mx-auto px-4 py-8'>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <h2 className="text-white text-2xl md:text-3xl font-medium font-['Fira Code']">{data[language].projectPart.header}</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data[language].projectPart.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProjectsComponent;