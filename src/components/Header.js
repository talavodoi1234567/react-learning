import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookA, ChevronRight } from 'lucide-react';
import useLanguage from '../hooks/UseLanguage';
import useLanguageData from '../hooks/UseLanguageData';

const PortfolioHeaderComponent = () => {
  
  const {language, changeLanguage} = useLanguage();
  const { data, loading, error } = useLanguageData(language)
  const [skills, setSkills] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8000/familiarwith')
    .then((res) => setSkills(res.data.familiarWith))
    .catch((error) => console.error(error))
  }, [])

  if (loading)
    return <div>Loading...</div>

  if (error)
    return <div>Error: {error.message}</div>
    
  return (
    <div className="min-h-screen w-full bg-[#080808] flex flex-col font-['Raleway']">
        <header className="w-full bg-[#1B1B1B]">
          <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center font-['IBM Plex Mono']">
            <nav className="flex items-center gap-8 mt-6 mb-7">
              <a href='#about-me' className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                {data[language].header[0]}
              </a>
              <a href='#skills' className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                {data[language].header[1]}
              </a>
              <a href='#projects' className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                {data[language].header[2]}
              </a>
              <a href="#contact" className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                {data[language].header[3]}
              </a>
            </nav>
            <button
              onClick={() => changeLanguage(language === 'en' ? 'vi' : 'en')}
              className='flex gap-1'
            >
              <BookA size={20} className='text-[#9C9C9C] text-sm font-normal flex items-center gap-2'/>
              <div className='text-[#9C9C9C] text-sm font-normal flex items-center gap-2 uppercase'>
                {language}
              </div>
            </button>
          </div>
        </header>
        <div className="flex justify-items-start text-white mt-32 items-center justify-center">
          <div className="header-text">
            <div className="heading-and-subheading">
              {data[language].beginIntroduce.greeting}
              <div className='heading self-stretch'>
                <h1 className='text-white text-5xl font-extrabold'>{data[language].beginIntroduce.name}</h1>
              </div>
              <div className='intro-text'>
                <p className="text-[#9C9C9C] text-sm font-normal flex items-center gap-2">
                  {data[language].beginIntroduce.introduce}
                </p>
              </div>
            </div>
            <a href='#about-me' className="flex py-5 px-16 bg-[#3F8E00] items-center border border-solid divide-[#62BA1B]">
              <p className='text-white text-base font-bold'>{data[language].beginIntroduce.buttonContent}</p>
              <ChevronRight size={15} className='text-white' />
            </a>
          </div>
          <div className="profile-image ml-9">
            <img src="/picture/t1.png" className='my-image' alt=''></img>
          </div>
        </div>
        <div className="worked-with ml-44 mb-5">
          <h3 className='text-white text-sm font-normal'>{data[language].beginIntroduce.demoSkillContent}</h3>
        </div>
        <div className="client-logos grow">
          {
            skills.map((curSkill, index) => {
              return <img key={index} src={ curSkill.picture } className="worked-in" alt={ curSkill.name }></img>;
            })
          }
        </div>
      </div>
  );
};

export default PortfolioHeaderComponent;