import { FaGithub } from "react-icons/fa";
export const Projects = () => {
    const projectsList = [
        {
            id: 1, // Unique ID for key prop
            title: "PUP Kiosk",
            description: "The PUP Kiosk Web Application is an interactive, browser-based tool designed to enhance campus navigation for students and visitors. Featuring a dynamic map of the PUP main campus, users can intuitively hover over specific areas to reveal highlighted locations and instantly access detailed descriptions, making finding buildings and facilities effortless",
            techs: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/GlaizelBelanio/PUP-Kiosk", 
            demo: "https://glaizelpup-kiosk.vercel.app/",
            image: "kiosk.png" 
        },
        {
            id: 1, // Unique ID for key prop
            title: "PUP Hymn ",
            description: "The PUP Hymn Synchronized Lyrics is a simple, interactive web application designed to help users fully engage with the Polytechnic University of the Philippines (PUP) Hymn. It features an intuitive synchronized lyrics display that scrolls alongside the audio, dynamically adjusting to playback progression. This project aims to provide an accessible and engaging way for the PUP community to learn, practice, and connect with their beloved anthem",
            techs: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/GlaizelBelanio/PUP-Hymn", 
            image: "hymn.png" 
        },
        {
            id: 1, // Unique ID for key prop
            title: "Jake's Coffee Shop",
            description: "Jake's Coffee Shop is a vibrant mock web application designed to bring a fictional cafe to life online. This responsive site offers intuitive tabs for exploring a delightful menu, discovering a curated music selection, and a fully functional job application portal powered by a XAMPP-integrated database. This project demonstrates comprehensive front-end development and essential backend connectivity, providing a seamless user experience.",
            techs: ["HTML", "CSS", "JavaScript", "PHP","Xampp"],
            github: "https://github.com/GlaizelBelanio/Jakes-Coffeeshop", 
            image: "jakes.png" 
        },
        {
            id: 1, // Unique ID for key prop
            title: "AcNow Mobile",
            description: "Acne Mobile is an iOS thesis application, built in Swift, designed for accessible dermatological self-assessment. It leverages a YOLOv5 model to accurately detect five distinct types of acne from photos or camera captures. Providing an intuitive interface and core functionalities, the app aims to offer preliminary insights for individuals with limited access to professional dermatology, empowering them to better understand their skin",
            techs: ["Swift","Xcode"],
            github: "https://github.com/GlaizelBelanio/AcnowMobile", 
            image: "acnow.png" 
        }
        
    ]
       
    
     return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-6xl mx-auto px-20">
                <h2 className="text-3xl flex flex-col font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-600 text-left bg-clip-text text-transparent">
                / projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
                   
                    {projectsList.map((project) => (
                        <div className="rounded-xl p-6 border-white/20 border hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/50 transition">

                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <img 
                                className="rounded-lg w-120 h-60 cursor-pointer hover:opacity-90 transition" 
                                src={project.image} 
                                alt={project.title} 
                                />
                            </a>
                            <h3 className="text-xl font-bold- mb-4 mt-4">{project.title}</h3>
                            <p className="text-gray-400 text-justify" >{project.description}</p>
                            <p className="text-gray-400 mt-4 mb-2">Techs:</p>
                            {project.techs.map((tech, key) => (
                                <span 
                                        key={key}
                                        className="bg-pink-500/10 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-500/20 
                                        hover:shadow-[0_2px_8px_rgba[59,130,2246,0.2] transition"
                                    >
                                        {tech}
                                </span>
                                
                                ))}
                                <div className="justify-end flex -mt-6">
                                    <a href={project.github}><FaGithub className="text-2xl mr-2 text-pink-500"></FaGithub> </a>

                                </div>  
                                
                                                      
                        </div> 
                        
                    ))}          
                    
            
                </div>

            </div>

           
            

       
       
        </section>

    );

    
}