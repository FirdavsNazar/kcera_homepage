import React from 'react';

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
            <a href="https://drive.google.com/file/d/1cJMH107BRK3VW0Of8K62ukpGOBLEnlBy/view?usp=sharing" target="_blank" className="tel-no">Catalogue</a>
            <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog"/></button>
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button>
        </div>
    );
}

export default HeaderConfig;