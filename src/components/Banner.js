import React from 'react';

const Banner = ({ height, imgSrc, overlay }) => {

    return (
        <section className='banner'>
            <div className={'banner__wrapper ' + height}>
                <img src={imgSrc} alt="Bannière" />
                {overlay ? <div className='overlay'>
                    <h1>
                        <span>Chez vous,</span> partout et ailleurs
                    </h1>
                </div> : ''}
            </div>
        </section>
    );
};

export default Banner;