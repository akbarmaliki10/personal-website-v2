import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Akbar</h1>
            <p className={styles.description}>
                I'm a Software Engineer with 1 years of experience using Go, Python, Java, and Javascript. Contact me if you want to learn more!
            </p>
            <a href="mailto:akbar.maliki.work@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of myself" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}