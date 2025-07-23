import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_8ihlnt8',
      'template_wmlmc4x',
      form.current,
      'auD4C9_5rtQafLjt2'
    )
    .then(() => {
      alert('Message sent!');
    }, () => {
      alert('Failed to send message.');
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-psd/abstract-geometric-pattern-with-overlapping-yellow-gray-white-squares_161754-126897.jpg?semt=ais_hybrid&w=740)',
          zIndex: -1
        }}
      />

      {/* Foreground Content */}
      <div className="max-w-4xl w-full bg-white/90 shadow-2xl rounded-2xl p-8 md:p-14 border border-gray-200 backdrop-blur-md flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Contact Info</h1>
          <div className="space-y-3 w-full">
            <div className="flex items-center text-gray-700 text-base">
              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" /></svg>
              <span><strong>WhatsApp / Cell:</strong> <a href="https://wa.me/923485391514" className="hover:text-amber-500 transition-colors">+92 348 5391514</a></span>
            </div>
            <div className="flex items-center text-gray-700 text-base">
              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
              <span><strong>Email:</strong> <a href="mailto:forowork.hs2@gmail.com" className="hover:text-amber-500 transition-colors">forowork.hs2@gmail.com</a></span>
            </div>
            <div className="flex items-center text-gray-700 text-base">
              <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.36.309.68.919.68 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
              <span><strong>GitHub:</strong> <a href="https://github.com" className="hover:text-amber-500 transition-colors">github.com</a></span>
            </div>
            <p className="text-xs text-gray-500 mt-4"><strong>Note:</strong> When you send a message using this form, I will receive it directly via email. This is not a static form—you can share your message and I will get it in my Gmail.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input type="text" name="user_name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input type="email" name="user_email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-amber-500 text-white font-semibold rounded-lg shadow hover:bg-amber-600 transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;