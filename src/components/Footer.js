import React from 'react';
import { ChevronUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const socialIcons = [
        { Icon: Facebook, link: 'https://facebook.com', name: 'Facebook' },
        { Icon: Twitter, link: 'https://twitter.com', name: 'Twitter' },
        { Icon: Instagram, link: 'https://instagram.com', name: 'Instagram' },
        { Icon: Linkedin, link: 'https://linkedin.com', name: 'LinkedIn' },
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
                        <span>BACK TO TOP</span>
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