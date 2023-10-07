import React, { useState, useEffect } from 'react';
import { redirect, useParams, Navigate } from 'react-router-dom';
import data from '../data/data';
import Tag from '../components/Tag';
import Accordion from '../components/Accordion';
import Stars from '../components/Stars';
import Slider from '../components/Slider';

const Details = () => {

    let params = useParams()
    const [product, setProduct] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [checkIfExists, setCheckIfExists] = useState(true)


    useEffect(() => {
        if (data.find((product) => product.id === params.id) === undefined) {
            setShouldRedirect(true)
            setCheckIfExists(true)
        } else {
            setCheckIfExists(true)
        }
        
    }, [])

    useEffect(() => {
        setIsLoading(true)
        let foundProduct = data.find((product) => product.id === params.id)
        setProduct(foundProduct)
        setIsLoading(false)
    }, [checkIfExists])

    return (
        <div className='product'>
            {shouldRedirect && <Navigate replace to="/error-404" />}
            {!isLoading && product !== '' ?  <div className='container'>
                <Slider images={product?.pictures} />
                <div className='product__infos'>
                    <div className='product__infos--column'>
                        <h1>{product?.title}</h1>
                        <p>{product?.location}</p>
                        <div className='tags'>
                            {product?.tags?.map((tag, index) => <Tag tag={tag} key={index} />)}
                        </div>
                    </div>
                    <div className='product__infos--column'>
                        <div className='host'>
                            <h2>{product?.host?.name}</h2>
                            <div className='img-wrapper'>
                                <img src={product?.host?.picture} alt={product?.host?.name} />
                            </div>
                        </div>
                        <Stars rating={product?.rating} />
                    </div>
                </div>
                <div className='accordions'>
                    <Accordion title="Description" text={product?.description} key={'description'} />
                    <Accordion title="Equipements" list={product?.equipments} key={'equipments'} />
                </div>
            </div> : ''}

        </div>
    );
};

export default Details;