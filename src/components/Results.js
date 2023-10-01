import React from 'react';
import Preview from './Preview';
import data from '../data/data.js';

const Results = () => {

    return (
        <div className='results'>
                {data.map((item, index) => <Preview key={index} title={item.title} imageSrc={item.cover} id={item.id}/>)}
        </div>
    );
};

export default Results;