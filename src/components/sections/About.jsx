export const About = () => {

    const skills =["Python", "C++", "HTML", "CSS", "Tailwind", "JavaScript", "PHP", "SwiftUI", "React", "MySQL", "Microsoft Office", "Google Workspace Tools", "Canva", "Figma","Git", "GitHub","Xcode", "Visual Studio Code"];
    const badges =[
        <a href="https://www.freecodecamp.org/certification/glaizelbelanio/responsive-web-design">Responsive Web Design</a>,
        <a href="https://www.credly.com/badges/193d1b9a-7ae7-493b-8ed6-7977e5be07f0/public_url">Getting Started in Cybersecurity 2.0</a>,
        <a href="https://www.credly.com/badges/15315174-0b93-42b6-8693-dc317fe229c9/public_url">Introduction to the Threat Landscape 2.0</a>,
        <a href="https://www.credly.com/badges/965d4e0c-61eb-43c2-aa54-59149cc58560/public_url">Fortinet Certified Fundamentals Cybersecurity</a>,
    ]
    
    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-6xl mx-auto px-20">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-600 text-left bg-clip-text text-transparent">
                / about me
                </h2>

                <div className="rounded-xl p-6 border-white/20 border hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500 transition-all">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <p className="text-gray-400 mb-6 text-justify">
                               I am <span className="text-white">Glaizel Nicole P. Belanio</span>, a graduating <span className="text-white">Bachelor of Science in Computer Science</span> student from the <span className="text-white">Polytechnic University of the Philippines</span> , 
                                eager to immerse myself in the dynamic world of technology. My insatiable hunger for learning drives me to constantly explore and master new concepts in coding and innovation.
                            </p>
                            <p className="text-gray-400"> Here are the technologies I'm <span className="text-white">currently working on:</span></p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {skills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-500/20 
                                        hover:shadow-[0_2px_8px_rgba[59,130,2246,0.2] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold- mb-4 mt-4">Certificates and Badges</h3>
                            <div className="flex flex-wrap gap-2">
                                {badges.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-500/20 
                                        hover:shadow-[0_2px_8px_rgba[59,130,2246,0.2] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <img class=" block mx-auto w-90 h-90 rounded-lg border border-white/20 hover:shadow-lg hover:shadow-pink-500/50" src="photo.jpg" alt="" />
                            
                            <h3 className="text-xl font-bold- mb-4 mt-4">Work Experience</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-pink-500 ">
                                <li>
                                    Virtual Academic Assistant <span className="text-gray-400">(Sept. – Jan. 2022)</span>
                                </li>
                                <li>
                                    Virtual Data Entry Assistant <span className="text-gray-400">(May – Oct. 2023)</span>
                                </li>
                                  <li>
                                    Front-End Web Dev. Intern at USHER Tech. <br /> <span className="text-gray-400">(Aug. – Sept. 2024)</span>
                                </li>
                                  <li>
                                    AI Writing Evaluator and Trainer at Outlier <br /><span className="text-gray-400">(Sept. 2024 – March 2025)</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                
               

                
            </div>

        
        </section>
    );
}