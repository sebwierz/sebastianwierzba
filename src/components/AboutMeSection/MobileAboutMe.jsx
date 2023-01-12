import React from "react";
import styles from "../../styles/MobileAboutMe.module.css"
import Title from "./InnerSection/Title";
import Name from "./InnerSection/Name";
import Location from "./InnerSection/Location";
import Icons from "./InnerSection/Icons";
import Description from "./InnerSection/Description";
import Image from "./InnerSection/Image";

export default function MobileAboutMe(){

    function onButtonClick(){
        fetch('CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV.pdf';
                alink.click();
            })
        })
        
    }

    return(
        <div className={styles.aboutMeSection}>
            <div className={styles.innerSection}>
                <Title title="About Me"/>
                <Image/>
                <Name name="Sebastian Wierzba"/>
                <Location location="Dresden" />
                <Icons/>
                <Description/>
                <div className={styles.buttons}>
                    <button type="button" className={styles.button} onClick={onButtonClick}>Download CV</button>
                    <a href='/#contact'><button type="button" className={styles.button}>Contact</button></a>
                    <br />
                </div>    
            </div>
        </div>
    )

}