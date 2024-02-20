import { NavLink } from 'react-router-dom';


interface Props {
    pages: Page[];
    onSelectItem?: (item: string) => void;
    active: number;
    title: string;
}

interface Page {
    title: string;
    path: string;
}

function Navbar({pages, onSelectItem, active }: Props) {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    {pages.map((item, index) => (
                        <li
                            key={index}
                            className={
                                active === index
                                    ? "active"
                                    : ""
                            }>
                            <NavLink to={item.path} className="nav-link" onClick={() => {
                                if (onSelectItem) {
                                    onSelectItem(item.title);
                                }
                            }}>{item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;