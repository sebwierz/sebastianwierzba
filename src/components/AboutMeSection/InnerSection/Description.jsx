import React from "react";
import styles from "../../../styles/MobileAboutMe.module.css"

export default function Description() {

    return(

        <div className={styles.description}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nunc ac dapibus mollis. Maecenas erat purus, sollicitudin at dui sed, fringilla aliquam nibh. Nam nec eros nisi. Nunc eu tellus orci. Maecenas quis sodales turpis. Vestibulum orci est, commodo ac magna ut, hendrerit placerat sem.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis sapien vestibulum, finibus elit sit amet, iaculis metus. Sed mauris lectus, ultricies sed metus ut, interdum venenatis massa. Morbi at aliquet lacus. Integer tortor tellus, faucibus ac lectus eu, posuere semper nisl.
            </p>
        </div>
        
    )
}