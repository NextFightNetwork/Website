import '../assets/css/pages/projects.css'
import Card from "../components/Card.tsx";
import {useState} from "react";


interface Project {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
    badges?: string[];
}

function ProjectsPage() {


    const projects: Project[] = [

        { title: "Minecraft Server",
            description: "Our Minecraft Server nextfight.net. Version 1.20.4. Java Edition",
            buttonText: "View Server",
            buttonURL: "https://minecraft-mp.com/server-s328770",
            imageSRC: "../../public/projects/server.png" },

        { title: "Skin Overlay Generator",
            description: "Festive overlays for your Minecraft skin",
            buttonText: "View on GitHub",
            buttonURL: "https://github.com/ToiletDevelopment/Skin-Overlay-Generator",
            imageSRC: "../../public/projects/skin-overlay.png",
            badges: ["https://img.shields.io/github/stars/ToiletDevelopment/Skin-Overlay",
                "https://img.shields.io/github/forks/ToiletDevelopment/Skin-Overlay" ] },

        { title: "NextFight Website",
            description: "The website you are currently on is open source!",
            buttonText: "View on GitHub",
            buttonURL: "https://github.com/NextFightNetwork/Website",
            imageSRC: "../../public/projects/website.png" },

        { title: "NextFight Application Bot",
            description: "A Discord application bot written in Typescript",
            buttonText: "View on GitHub",
            buttonURL: "https://github.com/NextFightNetwork/NextApply",
            imageSRC: "../../public/projects/apply.png" }
    ];

    const [isHovered, setIsHovered] = useState(false);
    const handleCardHover = (hovered: boolean) => {
        setIsHovered(hovered);
    };


    return (
        <div className="projects-container">
            <div className="cards-container">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        buttonText={project.buttonText}
                        buttonURL={project.buttonURL}
                        imageSRC={project.imageSRC}
                        setHovered={handleCardHover}
                        allHovered={isHovered}
                        badges={project.badges}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;