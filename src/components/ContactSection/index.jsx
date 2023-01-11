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
                <a href="mailto:sebastianwierzba@web.de"><button type="button" className={styles.button}>Send E-Mail</button></a>
                <div className={styles.icons}>
                    <a href="https://de.linkedin.com/in/sebastian-wierzba" target="_blank">
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                    <a href="https://www.xing.com/profile/Sebastian_Wierzba2/" target="blank">
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM140.4 320.2H93.8c-5.5 0-8.7-5.3-6-10.3l49.3-86.7c.1 0 .1-.1 0-.2l-31.4-54c-3-5.6.2-10.1 6-10.1h46.6c5.2 0 9.5 2.9 12.9 8.7l31.9 55.3c-1.3 2.3-18 31.7-50.1 88.2-3.5 6.2-7.7 9.1-12.6 9.1zm219.7-214.1L257.3 286.8v.2l65.5 119c2.8 5.1.1 10.1-6 10.1h-46.6c-5.5 0-9.7-2.9-12.9-8.7l-66-120.3c2.3-4.1 36.8-64.9 103.4-182.3 3.3-5.8 7.4-8.7 12.5-8.7h46.9c5.7-.1 8.8 4.7 6 10z"/></svg>
                    </a>
                </div>
            </div>
        </section>
    )
}