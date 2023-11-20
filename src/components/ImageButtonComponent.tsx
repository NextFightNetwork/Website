interface Props {
    title: string;
    onClick: () => void;
    className: string;
    imagePath: string;
}

function ImageButtonComponent({title, onClick, className, imagePath}: Props) {
    return (
        <>
            <button className={className} onClick={onClick}>
                <img width="150px" src={"../../public/" + imagePath} alt="icon"/>
                {title}
            </button>
        </>
    );
}

export default ImageButtonComponent;