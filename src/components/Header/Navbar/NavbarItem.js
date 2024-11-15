import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar";

function NavbarItem(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set the initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {navbarData.map(item => (
                <li key={item.id}
                    className={item.subMenu || item.megaMenu ? 'has-submenu' : ''}
                >
                    <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
                    {(() => {
                        if (item.subMenu) {
                            return (
                                <ul className="submenu-nav">
                                    {item.subMenu.map((subItem, index) => (
                                        <li key={index}><Link to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title}</Link></li>
                                    ))}
                                </ul>
                            );
                        }

                        if (item.megaMenu) {
                            return (
                                <ul className="submenu-nav submenu-nav-mega">
                                    {item.megaMenu.map((megaItem, indx) => (
                                        <li key={indx} className="mega-menu-item">
                                            <Link to={megaItem.link}>{megaItem.title}</Link>
                                            <ul>
                                                {megaItem.lists.map((listItem, idx) => (
                                                    <li key={idx}><Link to={`${process.env.PUBLIC_URL + listItem.link}`}>{listItem.title}</Link></li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }
                    })()}
                </li>
            ))}

            {/* Conditionally render "Catalogue" item for mobile only with an external link */}
            {isMobile && (
                <li key="catalogue">
                    <a 
                        href="https://drive.google.com/file/d/1wS3HxZgPc20GI8zT32Nt9Li0zWpW_0yw/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="tel-no"
                    >
                        Catalogue
                    </a>
                </li>
            )}
        </>
    );
}

export default NavbarItem;
