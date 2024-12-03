import React from "react";
import useLanguage from "../hooks/UseLanguage";

const IntroduceComponent = () => {

    const { language, data, loading, error } = useLanguage();

    if (loading)
        return;

    if (error)
        return;

    return (
        <div className='flex flex-col bg-theme' id='about-me'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='skill-header mt-16 sm:mt-24 md:mt-36'>
              <div className='text-skill-header text-center p-2'>
                        <div className='font-skill-header uppercase text-xl sm:text-2xl md:text-3xl font-bold'>
                  {data[language].aboutMe.header}
                        </div>
              </div>
            </div>
    
            <div className='my-10 sm:my-16 md:my-20 describe'>
              <div className='text-describe text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-center whitespace-pre-wrap mb-8 sm:mb-10'>
                {data[language].aboutMe.content}
              </div>
            </div>
    
            <div className='flex justify-center mb-12 sm:mb-16 md:mb-20'>
              <a 
                href="#skills" 
                className='border-x-2 sm:border-x-4 border-solid border-black px-6 sm:px-8 md:px-10 py-2 sm:py-3 uppercase text-sm sm:text-base hover:bg-black hover:text-white transition duration-300'
              >
                {data[language].aboutMe.exploreButton}
              </a>
            </div>
    
            <div className='flex justify-center'>
              <img src="/picture/layer/separatorBlack1.png" alt="" className='w-16 sm:w-20 h-1 sm:h-2' />
            </div>
          </div>
        </div>
      );
}

export default IntroduceComponent