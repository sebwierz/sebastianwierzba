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
                    <button type="button" className={styles.button} onClick={onButtonClick}>
                    <svg className={styles.downloadIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
                    CV
                    </button>
                    <a href='/#contact'><button type="button" className={styles.button}>Contact</button></a>
                    <br />
                </div>    
            </div>
        </div>
    )

}