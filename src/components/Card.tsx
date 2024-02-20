import {useState} from "react";


interface Props {
    title: string;
    description: string;
    buttonText: string;
    buttonURL: string;
    imageSRC: string;
    setHovered: (hovered: boolean) => void;
    allHovered: boolean;
    badges?: string[];
}

const Card = ({ title, description, buttonText, buttonURL, imageSRC, setHovered, allHovered, badges = []}: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleCardHover = (hovered: boolean) => {
        setIsHovered(hovered);
        setHovered(hovered);
    };

    const cardClassName = `card hover-card project-card ${!isHovered && allHovered ? "blurred" : ""}`;


    const cardStyle = {
        width: "18rem",
    };

    const imageStyle = {
        transition: "filter 0.5s ease",
    };


    return (
        <div className={cardClassName} style={cardStyle}
             onMouseEnter={() => handleCardHover(true)}
             onMouseLeave={() => handleCardHover(false)}>
            <div className="hover14 column">
                <figure>
                    <img
                        src={imageSRC}
                        loading="lazy"
                        className="card-img-top"
                        style={imageStyle}
                        alt="banner"
                    />
                </figure>
            </div>
            <div className="card-body project-card-body">
                <div className="card-badges">
                    {badges.map((badge, index) => (
                        <img key={index} src={badge} alt="badge" />
                    ))}
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="glow"/>
            </div>
            <a target="_blank" href={buttonURL} className="card-button">
                {buttonText}
            </a>
        </div>
    );
};

export default Card;