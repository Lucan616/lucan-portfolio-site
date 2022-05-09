import React from 'react'
import * as styles from './footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      &copy; {currentYear} | Made with 🧠 by Lucan Grobler
    </footer>
  )
}

export default Footer