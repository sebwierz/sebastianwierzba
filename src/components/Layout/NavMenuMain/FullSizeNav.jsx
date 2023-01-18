import React from 'react';
import NavItem from "./NavItem.jsx";
import {staticNav} from '../../../static/staticNav.js';
import styles from '../../../styles/FullSizeNav.module.css'



export default function FullSizeNav({name}){

    const NavItems = staticNav.map((item)=>{
        return(
            <NavItem key={item.id} title={item.title} link={item.link} />
        )
    })

    return(
        <>
            <div className={styles.titleAndNav}>
                <h1 className={styles.title}>{name}</h1>
                <nav className={styles.navigation}>
                    <ul>
                        {NavItems}
                    </ul>
                </nav>                
            </div>
        </>
    )
}

