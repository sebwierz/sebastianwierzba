import React from 'react';
import styles from '../../styles/AboutMe.module.css'

export default function AboutMe(){

    return(
        <section id="aboutMe" className={styles.aboutMeSection}>
            <div className={styles.innerSection}>
                <h1>About Me</h1>
                <img src="../../../assets/sw.jpg" alt="Sebastian Wierzba"/>
                <h2>Sebastian Wierzba</h2>
                <div className={styles.location}>
                    <p>Location-Icon</p>
                    <p>Dresden</p>
                </div>
                <div className={styles.icons}>
                    <p>LinkedIn-Icon</p>
                    <p>Xing-Icon</p>
                    <p>GitHub-Icon</p>
                    <p>Mail-Icon</p>
                </div>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nunc ac dapibus mollis. Maecenas erat purus, sollicitudin at dui sed, fringilla aliquam nibh. Nam nec eros nisi. Nunc eu tellus orci. Maecenas quis sodales turpis. Vestibulum orci est, commodo ac magna ut, hendrerit placerat sem.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis sapien vestibulum, finibus elit sit amet, iaculis metus. Sed mauris lectus, ultricies sed metus ut, interdum venenatis massa. Morbi at aliquet lacus. Integer tortor tellus, faucibus ac lectus eu, posuere semper nisl.
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button type="button">Download CV</button>
                    <button type="button" onClick={'#contact'}>Contact</button>
                    <br />
                </div>
            </div>
        </section>
    )
}