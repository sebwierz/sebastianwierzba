import React from 'react';
import SectionList from "./SectionList";
import styles from '../../../styles/NavMenu.module.css'

export default function NavMenu(){

    return(
        <nav className={styles.navMenu}>
            <SectionList/> 
        </nav>
    )
}