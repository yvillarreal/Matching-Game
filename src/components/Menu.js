import React, { useState } from 'react';

const Menu = ({ increaseLevel, decreaseLevel }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                ☰
            </div>
            {menuOpen && (
                <div className="menu">
                    <button onClick={increaseLevel}>Subir de nivel</button>
                    <button onClick={decreaseLevel}>Bajar de nivel</button>
                </div>
            )}
        </div>
    );
};

export default Menu;
