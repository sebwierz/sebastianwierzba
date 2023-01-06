import React from "react";
import styles from '../../../styles/NavMenuMain.module.css'



export default function NavList({isNavExpanded, setIsNavExpanded}){

    function handleClose(e){
        e.preventDefault()
        setIsNavExpanded(!isNavExpanded)
    }


    return(
        <div className={isNavExpanded ? styles.sectionListOpen : styles.sectionListClosed}>
            <button onClick={handleClose}>Close</button>
       <ul >
            <li><a href="#top">Home</a></li>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects" >Projects</a></li>
            <li><a href="#experience" >Experience</a></li>
            <li><a href="#contact" >Contact</a></li>
       </ul>
       </div>
    )
}