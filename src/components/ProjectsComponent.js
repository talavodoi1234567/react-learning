import React from 'react';

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
                {cachedLink && (
                    <div className="px-4 py-2 border border-[#abb2bf] flex items-center">
                        <div className="text-[#abb2bf] text-sm md:text-base font-medium font-['Fira Code']">Cached {">="}</div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

const ProjectsComponent = () => {
    const projects = [
        {
            image: "https://via.placeholder.com/331x201",
            technologies: ["Python", "Flask", "RestAPI"],
            title: "Bus Passes Vite",
            description: "REST API using Flask for a completed website",
            liveLink: true,
            cachedLink: false
        },
        {
            image: "https://via.placeholder.com/331x201",
            technologies: ["HTML", "CSS", "JS", "JQuery", "Flask", "Jinja"],
            title: "SB Admin Clone",
            description: "Sales management website with Flask",
            liveLink: true,
            cachedLink: false
        },
        {
            image: "https://via.placeholder.com/331x201",
            technologies: ["HTML", "CSS", "JS", "JQuery", "Django", "Jinja"],
            title: "SB Admin Clone 2",
            description: "SB Admin Clone build by Django",
            liveLink: true,
            cachedLink: false
        },
        {
            image: "https://via.placeholder.com/331x201",
            technologies: ["HTML", "CSS", "JS", "React"],
            title: "My Portfolio",
            description: "This web page using ReactJS",
            liveLink: true,
            cachedLink: false
        }
    ];

    return (
        <div className="w-full bg-[#282C33]" id='projects'>
            <div className='max-w-[1027px] mx-auto px-4 py-8'>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <h2 className="text-white text-2xl md:text-3xl font-medium font-['Fira Code']">Projects</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProjectsComponent;