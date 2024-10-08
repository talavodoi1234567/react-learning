import React from 'react';
import { ChevronUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import useLanguage from '../hooks/UseLanguage';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const { language, data, loading, error } = useLanguage();
    
    if (loading)
        return;

    if (error)
        return;

    const socialIcons = [
        { Icon: Facebook, link: data.overall.socialMedia[0], name: 'Facebook' },
        { Icon: Instagram, link: data.overall.socialMedia[1], name: 'Instagram' },
        { Icon: Linkedin, link: data.overall.socialMedia[2], name: 'Linkedin' },
    ];

    return (
        <footer className="w-full bg-[#1a1a1a] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between space-y-8 md:space-y-0 gap-2">

                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-2 text-[15px] font-bold font-['Montserrat'] tracking-[2.78px] hover:text-yellow-400 transition-colors duration-300"
                    >
                        <ChevronUp size={20} />
                        <span className="uppercase">{data[language].backToTopButton}</span>
                    </button>

                    <div className="flex gap-2">
                        {socialIcons.map(({ Icon, link, name }) => (
                            <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-lg">
                        <span className="font-bold font-['Nunito']">@2024 Phuc Nguyen</span>
                        <span className="font-['Nunito']"> All Rights Reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;