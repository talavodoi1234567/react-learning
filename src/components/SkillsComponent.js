import React from "react";

const SkillsComponent = () => {
    return (
      <div className='flex justify-center p-4 bg-theme' id='skills'>
        <div className="w-full max-w-[1024px] space-y-8">
          <div className="flex justify-start items-center">
            <h2 className="text-black text-3xl md:text-4xl font-medium font-['Fira Code']">Skills</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 space-y-4">
              <DotPattern />
              <SkillBox />
              <div className="hidden md:block">
                <BorderBox size="w-[52px] h-[52px]" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCategory title="Languages" skills={['Python', 'JavaScript', 'SQL']} />
              <SkillCategory title="Databases" skills={['MySQL', 'PostgreSQL', 'Mongo']} />
              <SkillCategory title="Frameworks" skills={['React', 'Next', 'Pandas', 'Numpy', 'Flask', 'Django']} />
              <SkillCategory title="Other" skills={['HTML', 'CSS', 'SCSS', 'REST', 'Jinja']} />
              <SkillCategory title="Tools" skills={['VSCode', 'Linux', 'Git', 'Github', 'Docker', 'PowerBI', 'Excel']} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const SkillCategory = ({ title, skills }) => (
    <div className="space-y-2">
      <h3 className="text-black text-lg font-semibold font-['Fira Code']">{title}</h3>
      <div className="border-t border-[#abb2bf]"></div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="text-[#abb2bf] text-sm font-normal font-['Fira Code']">{skill}</span>
        ))}
      </div>
    </div>
  );
  
  const DotPattern = () => (
    <div className="w-16 h-16 grid grid-cols-5 gap-1">
      {[...Array(25)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-[#abb2bf] rounded-full" />
      ))}
    </div>
  );
  
  const SkillBox = () => (
    <div className="w-28 h-28 relative">
      <div className="w-14 h-[84.75px] absolute right-0 top-0 border border-[#c778dd]" />
      <div className="w-14 h-[84.75px] absolute left-0 bottom-0 border border-[#c778dd]" />
    </div>
  );
  
  const BorderBox = ({ size }) => (
    <div className={`${size} border border-[#abb2bf]`}></div>
  );
  
  export default SkillsComponent;