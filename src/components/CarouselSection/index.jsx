import React, {useEffect, useState} from 'react';
import styles from '../../styles/CarouselSection.module.css'


export default function CarouselSection(){

     const data = ["1", "2", "3", "4"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length-1){
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{carouselInfiniteScroll()}, 3000)
        //clean up
        return() => clearInterval(interval);
    })

    return(
        <section id="carousel" className={styles.carouselSection}>
            <div className={styles.carouselContainer}>
               {data.map((item, index) => {
                return <h1 className={styles.carouselItem} 
                        style={{transform: `translate(-${currentIndex * 100}%)`}}
                        key={index}>{item}</h1>})
                }
            </div>
        </section> 
    )
}/* */
/*
import React, { useState } from 'react';

const CarouselSection = () => {
const [index, setIndex] = useState(0); 
  const length = 3;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <p>{index}</p>
    </div>
  );
};

export default CarouselSection;*/

/*

import React from 'react';
import styles from '../../styles/CarouselSection.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselSection = () => {
return ( 
    <div className={styles.carouselSection}>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={3}
        >
        <Slider>
            <Slide index={0}>Slide 1</Slide>
            <Slide index={1}>Slide 2</Slide>
            <Slide index={2}>Slide 3</Slide>
        </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    </div>
    );
};

export default CarouselSection;  */