import React from 'react';
import styles from '../../styles/AboutMe.module.css'


export default function AboutMe(){

    return(
        <section id="aboutMe" className={styles.aboutMeSection}>
            <h1>AboutMe</h1>
            <img src="" alt="Sebastian Wierzba"/>
            <div>
                <p>Location-Icon</p>
                <p>Dresden</p>
            </div>
            <h3>Sebastian Wierzba</h3>
            <div>
                <p>LinkedIn-Icon</p>
                <p>Xing-Icon</p>
                <p>GitHub-Icon</p>
                <p>Mail-Icon</p>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nunc ac dapibus mollis. Maecenas erat purus, sollicitudin at dui sed, fringilla aliquam nibh. Nam nec eros nisi. Nunc eu tellus orci. Maecenas quis sodales turpis. Vestibulum orci est, commodo ac magna ut, hendrerit placerat sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis sapien vestibulum, finibus elit sit amet, iaculis metus. Sed mauris lectus, ultricies sed metus ut, interdum venenatis massa. Morbi at aliquet lacus. Integer tortor tellus, faucibus ac lectus eu, posuere semper nisl.
            </p>
            <div className={styles.aboutMeSection}>
                <button type="button">Download CV</button>
                <button type="button">Contact</button>
            </div>
            
        </section>
    )
}