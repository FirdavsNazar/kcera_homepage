import React from 'react';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next';


const HeaderConfig = () => {
    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }

    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }
    

    return (
        <div className="header-action mt-lg-3 text-end">
            <a href="https://drive.google.com/file/d/1wS3HxZgPc20GI8zT32Nt9Li0zWpW_0yw/view?usp=drive_link" target="blank" className="tel-no">Catalogue</a>
            <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog"/></button>
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button>

        </div>
    );
}

export default HeaderConfig;