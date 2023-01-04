import React from "react";
import Section from "./Section";
import styles from '../../../styles/NavMenu.module.css'



export default function SectionList(){
    return(
       <ul className={styles}>
        <Section name="Home"/>
        <Section name="About Me"/>
        <Section name="Skills"/>
        <Section name="Projects"/>
        <Section name="Experience"/>
        <Section name="Contact"/>
       </ul>
    )
}