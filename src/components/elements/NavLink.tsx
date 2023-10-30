/** @format */

import React from "react";
import { Link } from "react-scroll";
import { navLinkProps } from "../../utils/type";

const NavLink: React.FC<navLinkProps> = ({ id, linkName, onClick }) => {
    return (
        <Link
            spy={true}
            smooth={true}
            onClick={onClick}
            offset={-70}
            duration={500}
            to={id}
            className='text-xl font-medium cursor-pointer py-3 hover:border-b-2 hover:border-white duration-300'
        >
            {linkName}
        </Link>
    );
};

export default NavLink;
