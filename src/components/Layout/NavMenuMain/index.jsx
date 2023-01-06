import React from 'react';
import {useState} from 'react';
import NavList from "./NavList";
import styles from '../../../styles/NavMenuMain.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNavicon} from '@fortawesome/free-solid-svg-icons'



export default function NavMenuMain({name}){

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    function toggleNav(e){
        e.preventDefault();
        setIsNavExpanded(!isNavExpanded)
    }

    return(
        <>
            <div >
                <div className={styles.titleAndDropdown}>
                    <h1 className={styles.title}>{name}</h1>
                        <button className={styles.button} onClick={toggleNav} >
                            <FontAwesomeIcon icon={faNavicon} size="2x" className={styles.burgerMenu}></FontAwesomeIcon>
                        </button>
                </div>
                <nav className={styles.navigation}>
                    <NavList isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded}/>
                </nav>                
            </div>
        </>
    )
}

