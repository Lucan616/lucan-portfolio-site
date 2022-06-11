import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Showcase from "../components/Showcase"
import TopProjects from "../components/TopProjects"

const IndexPage = ({ data: projectImages }) => {

  return (
    <div>
      <Helmet>
        <title>Hi, I'm Lucan</title>
      </Helmet>

      <div className="site-container">
        <Showcase />
        <TopProjects projectImages={projectImages} />
      </div>
    </div>
  )
}

export const query = graphql`
  query TopProjectsQuery {
    unicollegeImage: file(relativePath: {eq: "projects/cropped-lossy/unicollege.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    upbfImage: file(relativePath: {eq: "projects/cropped-lossy/upbf.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    coltriImage: file(relativePath: {eq: "projects/cropped-lossy/coltri.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage