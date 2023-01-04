import React from 'react';
import SectionList from "./SectionList";
import styles from '../../../styles/NavMenu.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNavicon} from '@fortawesome/free-solid-svg-icons'



export default function NavMenu({name}){

    return(
        <>
            <div className={styles.titleBurger}>
                <h1 className={styles}>{name}</h1>
                <FontAwesomeIcon icon={faNavicon} size="2x" className={styles.burgerMenu}></FontAwesomeIcon>
            </div>
            <nav className={styles.navigation}>
                <SectionList/> 
            </nav>
         
           
        </>
    )
}

