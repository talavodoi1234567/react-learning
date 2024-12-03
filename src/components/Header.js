import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookA, ChevronRight } from 'lucide-react';
import useLanguage from '../hooks/UseLanguage';
import { API_URL } from '../config/config';

const PortfolioHeaderComponent = () => {

  const { language, changeLanguage, data, loading, error } = useLanguage();
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/familiarwith`)
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
            <BookA size={20} className='text-[#9C9C9C] text-sm font-normal flex items-center gap-2' />
            <div className='text-[#9C9C9C] text-sm font-normal flex items-center gap-2 uppercase'>
              {language}
            </div>
          </button>
        </div>
      </header>
      <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between text-white mt-8 sm:mt-16 md:mt-32 px-4 sm:px-8 lg:px-16">
  <div className="header-text text-center sm:text-left mb-8 sm:mb-0 sm:mr-8 w-full sm:w-1/2">
    <div className="heading-and-subheading">
      <div className="text-lg sm:text-xl md:text-2xl mb-2">{data[language].beginIntroduce.greeting}</div>
      <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4'>{data[language].beginIntroduce.name}</h1>
      <p className="text-[#9C9C9C] text-sm sm:text-base font-normal mb-6">
        {data[language].beginIntroduce.introduce}
      </p>
    </div>

    <a href='#about-me' className="inline-flex py-2 sm:py-3 px-6 sm:px-8 bg-[#3F8E00] items-center border border-solid divide-[#62BA1B] text-sm sm:text-base">
      <p className='text-white font-bold mr-2'>{data[language].beginIntroduce.buttonContent}</p>
      <ChevronRight size={12} className='text-white' />
    </a>
  </div>

  <div className="profile-image w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center sm:justify-end">
    <img src={data.overall.profilePicture} className='my-image w-48 sm:w-56 md:w-64 lg:w-auto max-w-full h-auto' alt='Profile' />
  </div>
</div>

      <div className="worked-with text-center md:text-left px-4 md:px-8 lg:px-16 mt-8 md:mt-16">
        <h3 className='text-white text-sm font-normal mb-4'>{data[language].beginIntroduce.demoSkillContent}</h3>
        <div className="client-logos grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((curSkill, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={curSkill.picture} className="worked-in w-12 h-12 object-contain" alt={curSkill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeaderComponent;