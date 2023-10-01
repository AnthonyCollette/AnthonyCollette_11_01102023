import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='error-404'>
            <div className='container'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
};

export default Error404;