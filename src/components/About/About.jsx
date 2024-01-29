import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";


export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="me learning" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer, experienced in building clean backend architecture with implementing design pattern for flexible use.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Cloud Engineer</h3>
                        <p>I'm a cloud engineer, experienced in understanding and implementing several Google Cloud and AWS feature for software development.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>;
};