import React from 'react';
import NavMenu from './NavMenu';
import styles from '../../styles/Header.module.css'


export default function Header(){

    return(
        <header className={styles}>
            <NavMenu name="Sebastian Wierzba"/>
        </header>
    )
}