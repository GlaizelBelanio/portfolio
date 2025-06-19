import React, { useState } from 'react'; // Added useState import
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); 

        const subject = encodeURIComponent(`Message from ${name} via your Portfolio`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        const recipientEmail = 'glaizelbelanio.business@gmail.com'; 

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-6xl mx-auto px-20 w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-600 text-left bg-clip-text text-transparent">
                    / contact me
                </h2>

                <div className="rounded-xl p-6 border-white/20 border hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500 transition-all w-full">
                    <div className ="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Information Section */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            {/* Corrected font-bold- typo here */}
                            <h2 className="text-xl font-bold mb-4 mt-4">Contact Information</h2>
                                <p className="flex items-center mt-4 mb-4 text-gray-400 hover:text-white">
                                    <MdEmail className="text-2xl mr-2 text-pink-500"/>
                                    glaizelbelanio.business@gmail.com
                                </p>
                                <p className="flex items-center mt-4 mb-4 text-gray-400 hover:text-white">
                                    <FaPhone className="text-2xl mr-2 text-pink-500"/>
                                   +63 956 044 8805
                                </p>
                                <p className="flex items-center mt-4 mb-4 text-gray-400 hover:text-white">
                                    <FaLocationDot className="text-2xl mr-2 text-pink-500"/>
                                   Malate, Manila, Philippines
                                </p>
                                <a className = "flex items-center mt-4 mb-4 text-gray-400 hover:text-white" href="https://github.com/GlaizelBelanio" target="_blank" rel="noopener noreferrer"> <FaGithub className="text-2xl mr-2 text-pink-500"/>GlaizelBelanio</a>
                                <a className = "flex items-center mt-4 mb-4 text-gray-400 hover:text-white" href="https://www.linkedin.com/in/glaizel-belanio-83392822a/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="text-2xl mr-2 text-pink-500"/>GlaizelBelanio</a>
                        </div>
                        
                        {/* Say Hello (Contact Form) Section */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                             {/* Corrected font-bold- typo here */}
                             <h2 className="text-xl font-bold mb-4 mt-4">Say Hello</h2>
                            {/* Added onSubmit handler and removed action attribute */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-pink-400 focus:outline-hidden"
                                        placeholder="Juan Dela Cruz"
                                        value={name} // Bind value to state
                                        onChange={(e) => setName(e.target.value)} // Update state on change
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-pink-400 focus:outline-hidden"
                                        placeholder="juan@example.com"
                                        value={email} // Bind value to state
                                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                                    />
                                </div>
                                
                                {/* Message Textarea */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
                                    <textarea 
                                        // 'type' attribute is not valid for textarea, but kept as per 'no styling change' instruction
                                        name="message" 
                                        id="message" 
                                        rows="5" // Added rows for better default height (functional attribute)
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-pink-400 focus:outline-hidden"
                                        placeholder="Hi, I'd like to talk about..."
                                        value={message} // Bind value to state
                                        onChange={(e) => setMessage(e.target.value)} // Update state on change
                                    ></textarea>
                                </div>

                                {/* Send Message Button */}
                                <button 
                                    type="submit" 
                                    className=" hover:bg-black border border-black hover:cursor-pointer hover:border-pink-500 mx-auto rounded-lg h-10 w-40 flex items-center justify-center gap-2 bg-pink-500"
                                >
                                    <IoIosSend />Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};