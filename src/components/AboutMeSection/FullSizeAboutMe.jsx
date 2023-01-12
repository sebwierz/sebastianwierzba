import React from "react";
import styles from "../../styles/FullSizeAboutMe.module.css"
import Title from "./InnerSection/Title";
import Name from "./InnerSection/Name";
import Location from "./InnerSection/Location";
import Icons from "./InnerSection/Icons";
import Description from "./InnerSection/Description";
import Image from "./InnerSection/Image";

export default function FullSizeAboutMe(){

    return(
         <section className={styles.aboutMeSection}>
            <div className={styles.innerSection}>
                <div className={styles.leftSection}>
                    <Image/>
                    <Name name="Sebastian Wierzba"/>
                    <Location location="Dresden" />
                    <Icons/>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.rightSection}>
                    <Title title="About Me"/>
                    <Description/>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.button}>Download CV</button>
                        <a href='/#contact'><button type="button" className={styles.button}>Contact</button></a>
                        <br />
                    </div>
                </div>     
            </div>
        </section>
    )

}