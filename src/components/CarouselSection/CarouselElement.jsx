import React, {useEffect, useState} from 'react';
import styles from '../../styles/CarouselSection.module.css'


export default function CarouselElement({item, currentIndex}){
console.log("carousel item",item)
    return(
        <div
            className={styles.carouselItem} 
            style={{transform: `translate(-${currentIndex * 100}%)`, backgroundImage: `url(${item.src})`, backgroundSize: "cover", backgroundRepeat: "none"}}>
                <div style={{display: "flex", flexDirection: "column"}}><h1>{item.title}</h1>
                <p>{item.subTitle}</p></div>
        </div>
    )
    
}