import React from "react";
import styles from '../../../styles/NavMenu.module.css'



export default function NavList(){
    return(
       <ul className={styles.sectionlist}>
            <li><a href="">Home2</a></li>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
       </ul>
    )
}