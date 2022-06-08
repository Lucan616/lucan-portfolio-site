import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'

import profileImage from '../../images/profile-image.jpg'
import * as styles from './showcase.module.scss'

import { FaLinkedinIn, FaHackerrank, FaGithub, FaFacebook } from 'react-icons/fa'


const Showcase = () => {
  return (
    <div className={styles.showcase}>
      {/* <StaticImage src='../images/profile-image.jpg' alt='Lucan Grobler' className="profile-image" /> */}

      <div className={styles.intro}>
        <img src={profileImage} alt="" />
        <h1>
          <span>Hi, I'm</span>
          <span className="tc-primary name">Lucan</span>
        </h1>
      </div>

      <p>
        A front-end developer with 2 years experience,<br/> specialising in JavaScript and React.
      </p>

      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/lucan-grobler/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://www.hackerrank.com/lucangrobler6" target="_blank" rel="noreferrer">
          <FaHackerrank />
        </a>
        <a href="https://github.com/Lucan616" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://web.facebook.com/lucan.grobler" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>

      <a href="mailto:lucangrobler6@gmail.com" className='btn-secondary'>
        Email Me Like It's the 90's
      </a>
    </div>
  )
}

export default Showcase