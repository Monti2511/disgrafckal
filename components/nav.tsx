import { CgAdd } from "react-icons/cg";
function Nav({isRotated, setIsRotated, isSlided, setIsSlided}) {
    
    const navItems = ["Lo De La GameBoy", "El Urbanismo", "lo que me salga de los huevos"];
    const transition = "all 0.7s cubic-bezier(.23,1,.32,1)";

    const handleMenu = () => {
        setIsRotated(!isRotated);
        setIsSlided(!isSlided);
    }

    const rotate = isRotated ? "rotate(225deg)" : "rotate(0)";
    const position = isSlided ? "0vw" : "-50vw";

    return (
        <header>
            <button style={{ transform: rotate, transition: transition }} onClick={handleMenu} className="nav-button"><CgAdd className="cgAdd" /></button>

            <nav style={{ right: position, transition: transition }} className="nav-slider">
                <ul>
                    {navItems.map(navItem => (
                        <li><a className="nav-link" href="#" style={{transition: transition}}>{navItem}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav
