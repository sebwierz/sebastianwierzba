import React, {useEffect, useState} from 'react';
import styles from '../../styles/CarouselSection.module.css'


export default function CarouselElement({item, currentIndex}){

    return(
        <div
            className={styles.carouselItem} 
            style={{transform: `translate(-${currentIndex * 100}%)`, backgroundColor: 'red'}}>
                <h1>{item}</h1>
        </div>
    )
    
}