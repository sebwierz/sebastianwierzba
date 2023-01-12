import React from 'react';
import styles from '../../styles/AboutMeSection.module.css'
import FullSizeAboutMe from './FullSizeAboutMe';
import MobileAboutMe from "./MobileAboutMe";

export default function AboutMeSection(){

    return(
        <section id="aboutMe" className={styles.aboutMeSection}>
            <div className={styles.fullsizeview}>
                <FullSizeAboutMe/>
            </div>
            <div className={styles.mobileview}>
                <MobileAboutMe/>
            </div>
        </section>
    )
}