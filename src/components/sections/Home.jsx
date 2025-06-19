export const Home = () => {
    return(
         <section 
         id="home" 
         className="min-h-screen flex flex-col items-center justify-center relative"
         >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-100 to-pink-600 bg-clip-text text-transparent leading-right">
                    Hi, Gelai here!
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    a <span className="text-white">curious mind</span> always eager to explore <span className="text-white">new challenges</span> and <span className="text-white">expand horizons.</span>
                </p>

                <div className="flex justify-center space-x-4"> 
                    <a 
                    href="public/Resume.pdf" 
                    download="Resume.pdf"
                    className="bg-transparent border border-pink-600 text-pink-600 px-6 py-2 rounded-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:bg-pink-600/90 hover:text-white"
                    >
                        Download Resume
                    </a>

                </div>
               
            </div>



        </section>
    );
};