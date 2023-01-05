import React from 'react';
import styles from '../../styles/FooterMain.module.css'


export default function Footer(){

    return(
        <footer className={styles}>
            <div className={styles.upwards}>
                <p>Pfeil-Icon</p>
            </div>
            <div className={styles.icons}>
                <p>LinkedIn-Icon</p>
                <p>Xing-Icon</p>
                <p>GitHub-Icon</p>
                <p>Mail-Icon</p>
            </div>
            <div className={styles.impressum}>
                <p>© 2023 Sebastian Wierzba</p>
                <p>All Rights reserved.</p>
            </div>
        </footer>
    )
}