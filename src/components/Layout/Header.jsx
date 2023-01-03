import React from 'react';
import NavMenu from './NavMenu/navmenu';
import Title from './Title/title';
import styles from '../../styles/header.module.css'


export default function header(){

    return(
        <header>
            <Title name="Sebastian Wierzba"/>
            <NavMenu/>
        </header>
    )
}