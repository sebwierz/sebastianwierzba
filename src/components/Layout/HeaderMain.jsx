import React from 'react';
import MobileNav from './NavMenuMain/MobileNav';
import FullSizeNav from './NavMenuMain/FullSizeNav';
import styles from '../../styles/HeaderMain.module.css'


export default function HeaderMain(){

    return(
        <header className={styles.header}>
            <div className={styles.fullSizeView}>
                <FullSizeNav name="Sebastian Wierzba"/>
            </div>
            <div className={styles.mobileView}>
                <MobileNav name="Sebastian Wierzba"/>
            </div>
        </header>
    )
}