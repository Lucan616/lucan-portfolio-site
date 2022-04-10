import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const IndexPage = () => {
  return (
    <StyledIndexPage>
      <div className="showcase">
        <StaticImage src='../images/profile-image.jpg' alt='Lucan Grobler' className="profile-image" />

        <div className="content">
          <h1>
            <span>Hi, I'm</span>
            <span className="name">Lucan</span>
            <span>Grobler</span>
          </h1>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt dolorem eum eos veritatis deleniti alias nemo recusandae ea facere?</p>
        </div>
      </div>
    </StyledIndexPage>
  )
}

const StyledIndexPage = styled.main`
  .showcase {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 4rem;

    max-width: 1400px;
    margin: 4rem auto;
    padding: 0 2rem;
  }

  .profile-image {
    flex: 0 0 auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  .content {
    flex: 1 1 200px;
  }

  h1 {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: fit-content;
    font-size: 12rem;
    font-weight: 900;
    line-height: 1;

    span.name {
      color: var(--primary-color);
      margin-left: -0.05em;
      padding-bottom: 0.1em;
      font-size: 1em;
      line-height: 0.8;
    }

    span:not(.name) {
      font-size: 0.275em;

      &:first-of-type {
        /* padding-left: 0.17em; */
      }

      &:last-of-type {
        padding-right: 0.17em;
        text-align: right;
      }
    }
  }

  p {
    color: #ddd;
    font-size: 1.3rem;
    line-height: 1.6;
  }
`

export default IndexPage