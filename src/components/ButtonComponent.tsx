

interface Props {
    title: string;
    onClick: () => void;
}

function ButtonComponent({title, onClick}: Props) {
    return (
        <button className="blurred-button" onClick={onClick}>
            {title}
        </button>
    );
}

export default ButtonComponent;