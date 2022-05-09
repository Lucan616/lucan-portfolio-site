import React from 'react'
import * as styles from './topProjects.module.scss'

import unicollegeImage from '../../images/projects/unicollege.png'
import upbfImage from '../../images/projects/upbf.png'
import coltriImage from '../../images/projects/coltri.png'

const projects = [
  {
    title: 'UniCollege',
    featuredImage: unicollegeImage,
    url: 'https://www.unicollege.co.za/'
  },
  {
    title: 'UPBF',
    featuredImage: upbfImage,
    url: 'https://upbf.co.za/'
  },
  {
    title: 'Coltri',
    featuredImage: coltriImage,
    url: 'https://coltri.co.za/'
  },
]

const TopProjects = () => {
  console.log(styles)

  return (
    <section id="top-projects" className={styles.topProjects}>
      <h3>My top <span className='tc-primary'>3</span> projects: </h3>

      <div className={styles.projectsContainer}>
        {projects.map(({ title, featuredImage, url }) => (
          <a href={url} target="_blank" rel="noreferrer" key={title} className={styles.projectCard}>
            <img src={featuredImage} alt={title} />
            <h4>{title}</h4>
          </a>
        ))}
      </div>
    </section>
  )
}

export default TopProjects