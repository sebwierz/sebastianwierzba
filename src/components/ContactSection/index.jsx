import React from 'react';
import styles from '../../styles/ContactSection.module.css'

export default function ContactSection(){

    return(
        <section id="contact" className={styles.contactSection}>
            <div className={styles.innerSection}>
                <h1>Contact</h1>
                <p>If you want to contact lorem ipsum... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis sapien vestibulum, finibus elit sit amet, iaculis metus. Sed mauris lectus, ultricies sed metus ut, interdum venenatis massa. Morbi at aliquet lacus. 
                     am looking forward to your message via e-mail, LinkedIn or Xing.
                </p>
                <a href="mailto:sebastianwierzba@web.de"><button type="button">Send E-Mail</button></a>
                <div>
                    <p>Linked-In-Icon</p>
                    <p>Xing-Icon</p>
                </div>
            </div>
        </section>
    )
}