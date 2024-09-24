import React from "react";

const IntroduceComponent = () => {
    return (
        <div className='flex flex-col bg-theme' id='about-me'>
            <div className='skill-header mt-36'>
                <div className='text-skill-header'>
                    <div className='font-skill-header'>
                        ABOUT ME
                    </div>
                </div>
            </div>
            <div className='my-20 describe flex justify-center'>
                <div className='text-describe'>
                    Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
                </div>
            </div>
            <div className='flex justify-center'>
                <a href="#skills" className='border-x-4 border-solid border-black px-10'>
                    EXPLORE
                </a>
            </div>
            <div className='my-[85px] flex justify-center'>
                <img src="/picture/layer\separatorBlack1.png" alt="" className='w-20 h-2'></img>
            </div>
        </div>
    )
}

export default IntroduceComponent