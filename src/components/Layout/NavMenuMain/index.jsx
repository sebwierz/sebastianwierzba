import React from 'react';
import {useState} from 'react';
import NavList from "./NavList";
import styles from '../../../styles/NavMenuMain.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNavicon} from '@fortawesome/free-solid-svg-icons'



export default function NavMenuMain({name}){

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <>
            <div className={styles.titleAndDropdown}>
                <h1 className={styles.title}>{name}</h1>
                <button className={styles.button} onClick={setIsNavExpanded(!isNavExpanded)}>
                    <FontAwesomeIcon icon={faNavicon} size="2x" className={styles.burgerMenu}></FontAwesomeIcon>
                </button>

                <div>
                    <nav className={styles.navigation}>
                        {isNavExpanded ? <NavList/> : "" }
                    </nav>
                </div>
                
            </div>
                    
           
        </>
    )
}

