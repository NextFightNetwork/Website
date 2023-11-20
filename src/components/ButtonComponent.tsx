

interface Props {
    title: string;
    onClick: () => void;
    className: string;
}

function ButtonComponent({title, onClick, className}: Props) {
    return (
        <button className={className} onClick={onClick}>
            {title}
        </button>
    );
}

export default ButtonComponent;