import React, { useState } from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import useLanguage from '../hooks/UseLanguage';
import axios from 'axios';

const ContactComponent = () => {

  const { language, data, loading, error } = useLanguage();

  const [name, setName] = useState('')
  const [info, setInfo] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:8000/send-message',{
        name: name,
        info: info,
        subject: subject,
        message: message
      });

      if (response.data.status === 'success') {
        setSubmitStatus('success');
        setName('')
        setInfo('')
        setSubject('')
        setMessage('')
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={data[language].contactPart.contactForm.inputName}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="info"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder={data[language].contactPart.contactForm.inputInfo}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={data[language].contactPart.contactForm.inputSubject}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={data[language].contactPart.contactForm.inputMessage}
                  rows={6}
                  className="w-full p-2 bg-gray-700 border-none text-white rounded resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 font-semibold uppercase"
              >
                {isSubmitting ? data[language].sendMessageData.sending : data[language].contactPart.contactForm.buttonSend}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-400">{data[language].sendMessageData.sendSuccessful}</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-400">{data[language].sendMessageData.sendFailed}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;