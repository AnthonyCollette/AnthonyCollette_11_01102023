import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import data from '../data/data';
import Tag from '../components/Tag';
import Accordion from '../components/Accordion';
import Stars from '../components/Stars';

const Details = () => {

    let params = useParams()
    const [product, setProduct] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        let foundProduct = data.find((product) => product.id === params.id)
        setProduct(foundProduct)
        setIsLoading(false)
    }, [])

    return (
        <div className='product'>
            {isLoading ? '' : <div className='container'>
                <Header height='big' imgSrc={product?.cover} />
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
                    <Accordion title="Description" text={product?.description} key={'description'}/>
                    <Accordion title="Equipements" list={product?.equipments} key={'equipments'}/>
                </div>
            </div>}

        </div>
    );
};

export default Details;