import React from "react";
import NavItem from "./NavItem.jsx";
import {staticNav} from '../../../static/staticNav.js';
import styles from '../../../styles/MobileNav.module.css'



export default function NavList({isNavExpanded, setIsNavExpanded}){

    function handleClose(e){
        e.preventDefault()
        setIsNavExpanded(!isNavExpanded)
    }

    const NavItems = staticNav.map((item)=>{
        return(
            <NavItem key={item.id} title={item.title} link={item.link} />
        )
    })


    return(
       <div className={isNavExpanded ? styles.sectionListOpen : styles.sectionListClosed}>    
            <ul>
                {NavItems}
                <li className={styles.closeButton} onClick={handleClose}>Close</li>
            </ul>
       </div>
    )
}