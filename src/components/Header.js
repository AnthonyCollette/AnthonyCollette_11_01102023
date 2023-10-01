import React from 'react';

const Header = ({ height, imgSrc, overlay }) => {

    return (
        <header className='banner'>
            <div className={'banner__wrapper ' + height}>
                <img src={imgSrc} alt="Bannière" />
                {overlay ? <div className='overlay'>
                    <h1>
                        <span>Chez vous,</span> partout et ailleurs
                    </h1>
                </div> : ''}
            </div>
        </header>
    );
};

export default Header;