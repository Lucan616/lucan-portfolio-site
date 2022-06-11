import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './ProjectCard.module.scss'

const ProjectCard = ({ title, url, image }) => {

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer" 
      className={styles.projectCard}
    >
      <GatsbyImage
        className={styles.projectImage}
        image={getImage(image)} 
        alt={title} 
      />
      <h4>{title}</h4>
    </a>
  )
}

export default ProjectCard