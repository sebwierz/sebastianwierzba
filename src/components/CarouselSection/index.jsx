import React from "react";
import {CarouselData} from "../../static/staticCarousel"; 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "../../App.css"

export default function CarouselSection() {
    return(
        <>
            <Swiper
                spaceBetween={1}
                loop={true}
                centeredSlides={true}
                autoplay={{delay: 2500, disableOnInteraction: false,}}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                {CarouselData.map(({id, src, title, subtitle})=> (
                    <SwiperSlide key={id} style={{backgroundImage: `url(${src})`}}>
                        <div className="carouselwrapper" >
                            <div className="carouseltextwrapper">
                                <h2>I am</h2>
                                <h2 className="carousel_title">{title}</h2>
                                <p className="carousel_description">{subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}



// import CarouselElement from './CarouselElement';
// import bg1 from '../../../public/background1.jpg'



/*
export default function CarouselSection(){
    

    const data = [{
        title: "erstes Bild",
        src: 'https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?size=626&ext=jpg&ga=GA1.1.1543015616.1673599659',
        subTitle: "hallo Welt"
    }, {
        title: "zweites  Bild",
        src: 'https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?size=626&ext=jpg&ga=GA1.1.1543015616.1673599659',
        subTitle: "hallo Du"
    }];
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
                return(
                        <CarouselElement currentIndex={currentIndex} item={item} key={index} />
                    ) })
                }
            </div>
        </section> 
    )
}*/


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