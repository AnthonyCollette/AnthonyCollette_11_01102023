import React, { useEffect, useRef, useState } from 'react';

const Slider = ({ images }) => {

    const slider = useRef(null)
    const slides = useRef(null)


    const [isLoading, setIsLoading] = useState(true)
    const [width, setWidth] = useState(slider?.current?.offsetWidth)
    const [slidesPosition, setSlidesPosition] = useState(0)
    const [totalWidth, setTotalWidth] = useState()

    const handleNextClick = () => {
        if (slidesPosition === -totalWidth + width) {
            setSlidesPosition(0)
        } else {
            setSlidesPosition(slidesPosition - width)
        }
    }
    const handlePrevClick = () => {
        if (slidesPosition === 0) {
            setSlidesPosition(-totalWidth + width)
        } else {
            setSlidesPosition(slidesPosition + width)
        }
    }

    const [swipe, setSwipe] = useState({
        transform: 'translateX(' + slidesPosition + 'px)'
    })

    const nextBtn = () => {
        if (images.length > 1) {
            return (
                <svg className='next' onClick={handleNextClick} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                </svg>
            )
        }
    }

    const prevBtn = () => {
        if (images.length > 1) {
            return (
                <svg className='prev' onClick={handlePrevClick} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                </svg>
            )
        }
    }

    useEffect(() => {
        setTotalWidth(width * images?.length)
        setIsLoading(false)
    }, [width])

    useEffect(() => {
        setWidth(slider?.current?.offsetWidth)
    }, [slider])

    useEffect(() => {
        setSwipe({ transform: 'translateX(' + slidesPosition + 'px)' })
    }, [slidesPosition])


    return (


        <div className='slider'>
            <div className='slider__show' ref={slider}>
                {!isLoading && prevBtn()}
                <div className='slider__slides' ref={slides} style={swipe}>
                    {images?.map((image, index) => <div className='slider__slide img-wrapper' key={index}>
                        <img src={image} alt={image} />
                        {images?.length > 1 ? <p>{index + 1}/{images?.length}</p> : ''}
                    </div>)}
                </div>

                {!isLoading && nextBtn()}
            </div>
        </div>
    );
};

export default Slider;