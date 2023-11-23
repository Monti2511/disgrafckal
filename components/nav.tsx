import { CgAdd } from "react-icons/cg";
import React, { useState } from 'react';
const Nav = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [isSlided, setIsSlided] = useState(false);
    const navItems = ["Lo De La GameBoy", "El Urbanismo", "lo que me salga de los huevos"];
    const transition = "all 0.3s linear";

    const handleRotate = () => {
        setIsRotated(!isRotated);
        setIsSlided(!isSlided);
    }

    const rotate = isRotated ? "rotate(225deg)" : "rotate(0)";
    const position = isSlided ? "0vw" : "-50vw";

    return (
        <header>
            <button style={{ transform: rotate, transition: transition }} onClick={handleRotate} className="nav-button"><CgAdd className="cgAdd" /></button>

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
