import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>Feel free to reach me!</p>
        </div>
        <ul className={styles.links}> 
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:akbar.maliki.work@gmail.com">akbar.maliki.work@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/akbar-maliki/">linkedin.com/in/akbar-maliki/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/akbarmaliki10">github.com/akbarmaliki10</a>
            </li>
        </ul>
    </footer>;
};