import React from "react"
import Helmet from 'react-helmet'
import Showcase from "../components/Showcase"
import TopProjects from "../components/TopProjects"

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hi, I'm Lucan</title>
      </Helmet>

      <div className="site-container">
        <Showcase />
        <TopProjects />
      </div>
    </div>
  )
}

export default IndexPage