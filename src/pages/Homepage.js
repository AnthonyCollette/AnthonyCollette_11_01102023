import React from 'react';
import Header from '../components/Header';
import Results from '../components/Results';
import image from '../assets/images/Image source 1.png';

const Homepage = () => {

    return (
        <div className='homepage'>
            <div className='container'>
                <Header height='small' imgSrc={image} overlay={true} />
                <Results />
            </div>
        </div>
    );
};

export default Homepage;