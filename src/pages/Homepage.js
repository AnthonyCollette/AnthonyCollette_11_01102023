import React from 'react';
import Banner from '../components/Banner';
import Results from '../components/Results';
import image from '../assets/images/Image source 1.png';

const Homepage = () => {

    return (
        <main className='homepage'>
            <div className='container'>
                <Banner height='small' imgSrc={image} overlay={true} />
                <Results />
            </div>
        </main>
    );
};

export default Homepage;