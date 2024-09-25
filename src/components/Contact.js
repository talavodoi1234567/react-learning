import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';

const ContactComponent = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-2">Contact</h1>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Address: Ha Noi, Vietnam</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>Email: abc@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2" />
                <span>Website: abcdef.a</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <input 
                  type="text"
                  placeholder="Name:" 
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder="Contact Info:" 
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder="Subject (optional):" 
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message:" 
                  rows={6}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 font-semibold uppercase"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;