import React from 'react'
import * as styles from './topProjects.module.scss'
import ProjectCard from './ProjectCard'

// import unicollegeImage from '../../images/projects/cropped-lossy/unicollege.png'
// import upbfImage from '../../images/projects/cropped-lossy/upbf.png'
// import coltriImage from '../../images/projects/cropped-lossy/coltri.png'


const TopProjects = ({ projectImages }) => {
  const { unicollegeImage, upbfImage, coltriImage } = projectImages

  const projects = [
    {
      title: 'UniCollege',
      featuredImage: unicollegeImage,
      url: 'https://www.unicollege.co.za/'
    },
    {
      title: 'UPBF',
      featuredImage: upbfImage,
      url: 'https://upbf.net/'
    },
    {
      title: 'Coltri',
      featuredImage: coltriImage,
      url: 'https://coltri.co.za/'
    },
  ]

  const projectCards = projects.map(({ title, featuredImage, url }) => (
    <ProjectCard key={url} title={title} image={featuredImage} url={url} />
  ))

  return (
    <section id="top-projects" className={styles.topProjects}>
      <h3>My top <span className='tc-primary'>3</span> projects: </h3>

      <div className={styles.projectsContainer}>
        {projectCards}
      </div>
    </section>
  )
}

export default TopProjects