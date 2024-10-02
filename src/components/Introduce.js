import React from "react";
import useLanguageData from "../hooks/UseLanguageData";
import useLanguage from "../hooks/UseLanguage";

const IntroduceComponent = () => {

    const { language } = useLanguage();
    const { data, loading, error } = useLanguageData()

    if (loading)
        return;

    if (error)
        return;

    return (
        <div className='flex flex-col bg-theme' id='about-me'>
            <div className='skill-header mt-36'>
                <div className='text-skill-header'>
                    <div className='font-skill-header uppercase'>
                        {data[language].aboutMe.header}
                    </div>
                </div>
            </div>
            <div className='my-20 describe flex justify-center'>
                <div className='text-describe'>
                    {data[language].aboutMe.content}
                </div>
            </div>
            <div className='flex justify-center'>
                <a href="#skills" className='border-x-4 border-solid border-black px-10 uppercase'>
                    {data[language].aboutMe.exploreButton}
                </a>
            </div>
            <div className='my-[85px] flex justify-center'>
                <img src="/picture/layer\separatorBlack1.png" alt="" className='w-20 h-2'></img>
            </div>
        </div>
    )
}

export default IntroduceComponent