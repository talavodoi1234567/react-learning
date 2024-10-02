import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import useLanguageData from '../hooks/UseLanguageData';
import useLanguage from '../hooks/UseLanguage';

const ContactComponent = () => {

  const { language } = useLanguage();
  const { data, loading, error } = useLanguageData()

  if (loading)
    return;
  if (error)
    return;
  
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-2">{data[language].contactPart.header}</h1>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{data[language].contactPart.info.headerInfo}</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>{data[language].contactPart.info.address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>{data[language].contactPart.info.email}</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2" />
                <span>{data[language].contactPart.info.website}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{data[language].contactPart.contactForm.headerForm}</h2>
            <form className="space-y-4">
              <div>
                <input 
                  type="text"
                  placeholder={data[language].contactPart.contactForm.inputName}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder={data[language].contactPart.contactForm.inputInfo}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder={data[language].contactPart.contactForm.inputSubject}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <textarea 
                  placeholder={data[language].contactPart.contactForm.inputMessage} 
                  rows={6}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 font-semibold uppercase"
              >
                {data[language].contactPart.contactForm.buttonSend}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;