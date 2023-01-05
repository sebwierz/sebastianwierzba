import React from 'react';
import NavMenuMain from './NavMenuMain';
import styles from '../../styles/HeaderMain.module.css'


export default function HeaderMain(){

    return(
        <header className={styles}>
            <NavMenuMain name="Sebastian Wierzba"/>
        </header>
    )
}