import React from "react";
import styles from '../../../styles/NavMenu.module.css'

export default function Section({name}){
    return(
     <li className={styles}>{name}</li>
    )
}