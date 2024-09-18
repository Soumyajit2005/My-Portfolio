import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../assets/contact/contactanimation.json';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
        <Lottie animationData={animationData} className={styles.animation} />
        <div>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:soumyajitparia02@gmail.com" target="_blank">soumyajitparia02@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon Icon" />
                <a href="https://www.linkedin.com/in/soumyajit-paria-785b60229/" target="_blank">linkedin.com/Soumyajit Paria</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/Soumyajit2005" target="_blank">github.com/Soumyajit2005</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
