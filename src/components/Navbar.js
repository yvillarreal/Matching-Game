import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <Menu right>
            <Link to="about" smooth duration={500}>
                About
            </Link>
        </Menu>
    );
};

export default Navbar;
