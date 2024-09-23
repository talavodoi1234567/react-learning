import React from 'react';
import { BookA, ChevronRight } from 'lucide-react';

const PortfolioHeaderComponent = () => {
  return (
    <div className="min-h-screen w-full bg-[#080808] flex flex-col font-['Raleway']">
        <header className="w-full bg-[#1B1B1B]">
          <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center font-['IBM Plex Mono']">
            <nav className="flex items-center gap-8 mt-6 mb-7">
              <a href='#about-me' className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                About Me
              </a>
              <a href='#skills' className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                Skills
              </a>
              <a href='#projects' className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                Projects
              </a>
              <a href="#contact" className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                Contact
              </a>
            </nav>
            <a href='#A' className='flex gap-1'>
              <BookA size={20} className='text-[#9C9C9C] text-sm font-normal flex items-center gap-2'/>
              <div className='text-[#9C9C9C] text-sm font-normal flex items-center gap-2'>
                EN
              </div>
            </a>
          </div>
        </header>
        <div className="flex justify-items-start text-white mt-32 items-center justify-center">
          <div className="header-text">
            <div className="heading-and-subheading">
              Hi, I'm
              <div className='heading self-stretch'>
                <h1 className='text-white text-5xl font-extrabold'>Phuc Nguyen</h1>
              </div>
              <div className='intro-text'>
                <p className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                  A Fullstack Developer, Data Analyst and an IT Support.
                </p>
              </div>
            </div>
            <a href='#about-me' className="flex py-5 px-16 bg-[#3F8E00] items-center border border-solid divide-[#62BA1B]">
              <p className='text-white text-base font-bold'>Let's get started</p>
              <ChevronRight size={15} className='text-white' />
            </a>
          </div>
          <div className="profile-image ml-9">
            <img src="/picture/t1.png" className='my-image' alt=''></img>
          </div>
        </div>
        <div className="worked-with ml-44 mb-5">
          <h3 className='text-white text-sm font-normal'>Familiar with</h3>
        </div>
        <div className="client-logos grow">
          <img src="/picture/skills/js.png" className="worked-in" alt=''></img>
          <img src="/picture/skills/python.png" className="worked-in" alt=''></img>
          <img src="/picture/skills/sql.png" className="worked-in" alt=''></img>
          <img src="/picture/skills/excel.jpeg" className="worked-in" alt=''></img>
        </div>
      </div>
  );
};

export default PortfolioHeaderComponent;