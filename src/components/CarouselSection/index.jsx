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
}