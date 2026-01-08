import React from 'react';

function LogoItem(props) {
    return (
        <div className="brand-logo-item">
            <a href={props.URL} target="_blank" rel="noopener noreferrer">
                <img src={require(`../../assets/img/${props.logoSrc}`)} alt="Businex-Logo" />
            </a>
        </div>
    );
}

export default LogoItem;
