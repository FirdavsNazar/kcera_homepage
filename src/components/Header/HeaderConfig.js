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
            <a href="http://kcera.kr/wp-content/uploads/down/%2719~20%20CERA%20TIGER%20CATALOGUE.pdf" className="tel-no">Catalogue</a>
            <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog"/></button>
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button>
        </div>
    );
}

export default HeaderConfig;