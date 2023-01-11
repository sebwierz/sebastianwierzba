import React from "react";
import styles from "../../styles/MobileAboutMe.module.css"
import Title from "./InnerSection/Title";
import Name from "./InnerSection/Name";
import Location from "./InnerSection/Location";
import Icons from "./InnerSection/Icons";
import Description from "./InnerSection/Description";
import Image from "./InnerSection/Image";

export default function MobileAboutMe(){

    return(
         <section id="aboutMe" className={styles.aboutMeSection}>
            <div className={styles.innerSection}>
                <Title title="About Me"/>
                <Image/>
                <Name name="Sebastian Wierzba"/>
                <Location location="Dresden" />
                <Icons/>
                <Description/>
                <div className={styles.buttons}>
                    <button type="button" className={styles.button}>Download CV</button>
                    <a href='/#contact'><button type="button" className={styles.button}>Contact</button></a>
                    <br />
                </div>    
            </div>
        </section>
    )

}