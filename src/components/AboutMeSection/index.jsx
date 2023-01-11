import React from 'react';
import styles from '../../styles/AboutMeSection.module.css'
import FullSizeAboutMe from './FullSizeAboutMe';
import MobileAboutMe from "./MobileAboutMe";

export default function AboutMeSection(){

    return(
        <>
            <div className={styles.fullsizeview}>
                <FullSizeAboutMe/>
            </div>
            <div className={styles.mobileview}>
                <MobileAboutMe/>
            </div>
        </>
    )
}