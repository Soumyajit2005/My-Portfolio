import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../assets/hero/getintouchanimation.json'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Soumyajit</h1>
            <p className={styles.description}>I'm a <span className='text-[#43F800] font-bold'>full-stack developer</span> with <span className='text-[#FF041E] font-bold'>2+ years</span> of learning experience using <span className='text-[#FFEE1C] font-bold'>React</span> and <span className='text-[#EB6BFD] font-bold'>NodeJs</span>. Reach out if you'd like to learn more.</p>
            
            <Lottie animationData={animationData} className={styles.contactBtn}/>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of Me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
