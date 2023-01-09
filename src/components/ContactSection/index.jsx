import React from 'react';
import styles from '../../styles/ContactSection.module.css'

export default function ContactSection(){

    return(
        <section id="contact" className={styles.contactSection}>
            <div className={styles.innerSection}>
                <h1>Contact</h1>
                <div className={styles.description}>
                    <p>If you want to contact lorem ipsum... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis sapien vestibulum, finibus elit sit amet, iaculis metus. Sed mauris lectus, ultricies sed metus ut, interdum venenatis massa. Morbi at aliquet lacus.</p> 
                    <br />
                    <p>I am looking forward to your message via <a href="mailto:sebastianwierzba@web.de">e-mail</a>, <a href="https://de.linkedin.com/in/sebastian-wierzba" target="_blank">LinkedIn</a>  or <a href="https://www.xing.com/profile/Sebastian_Wierzba2/" target="blank">Xing</a>.</p>
                    <br/>
                </div>
                <a href="mailto:sebastianwierzba@web.de"><button type="button">Send E-Mail</button></a>
                <div className={styles.icons}>
                    <p className={styles.icon}>Linked-In-Icon</p>
                    <p className={styles.icon}>Xing-Icon</p>
                </div>
            </div>
        </section>
    )
}