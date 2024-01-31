import { CgAdd } from "react-icons/cg";
function Nav({ isRotated, setIsRotated, isSlided, setIsSlided }) {

    const navItems = ["Lo De La GameBoy", "El Urbanismo", "lo que me salga de los huevos"];

    const handleMenu = () => {
        setIsRotated(!isRotated);
        setIsSlided(!isSlided);
    }

    const handleMode = () => {
        document.body.classList.toggle("dark-mode");
    }

    const rotate = isRotated ? "rotate(225deg)" : "rotate(0)";
    const position = isSlided ? "0vw" : "-50vw";

    return (
        <header>
            <div className="mode-button">
                <label className="switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onClick={handleMode} />
                    <div className="slider "></div>
                </label>
            </div>
            <button style={{ transform: rotate }} onClick={handleMenu} className="nav-button"><CgAdd className="cgAdd" /></button>

            <nav style={{ right: position }} className="nav-slider">
                <ul>
                    {navItems.map(navItem => (
                        <li><a className="nav-link" href="#">{navItem}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav
