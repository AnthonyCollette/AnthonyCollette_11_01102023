import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Preview = ({ title, imageSrc, id }) => {

    const [url, setUrl] = useState()

    return (
        <div className='preview'>
            <Link to={`/details/${id}`}>
                <div className="img-wrapper">
                    <img src={imageSrc} alt="Prévisualisation du logement" />
                    <div className='img-wrapper__overlay'>
                        <h2>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Preview;