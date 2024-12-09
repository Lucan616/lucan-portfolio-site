import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaLinkedinIn, FaHackerrank, FaGithub, FaFacebook } from 'react-icons/fa';
import { CAREER_START_DATE } from '../../constants';
import { calculateDiffYears } from '../../helpers';
import * as styles from './showcase.module.scss';

export default function Showcase() {
  const yearsExperience = calculateDiffYears(new Date(CAREER_START_DATE));

  return (
    <div className={styles.showcase}>
      <div className={styles.intro}>
        <StaticImage 
          src="../../images/profile-image.jpg" 
          alt="Lucan Grobler"
          className={styles.profileImage} 
          imgClassName={styles.profileImageImg}
        />
        <h1>
          <span>Hi, I'm</span>
          <span className="tc-primary name">Lucan</span>
        </h1>
      </div>

      <p>
        A front-end developer with {yearsExperience} years experience,<br /> specialising in JavaScript and React.
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