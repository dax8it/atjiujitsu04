import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

import BlogRollHome from '../components/BlogRollHome'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top`,
        backgroundAttachment: `scroll`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="title has-text-centered has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(0, 102, 204) 0.5rem 0px 0px, rgb(0, 102, 204) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 102, 204, 0.5)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-centered has-text-weight-normal is-size-6-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(0, 102, 204) 0.5rem 0px 0px, rgb(0, 102, 204) -0.5rem 0px 0px',
            backgroundColor: 'rgb(0, 102, 204, 0.5)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
      
    </div>
    <section className="section section--gradient">
      <div className="container">
        
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <div className="content  is-child box notification">
                  <div className="tile">
                    <h1 className="title has-text-weight-semibold is-size-4-mobile is-size-2-tablet is-size-1-widescreen">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle has-text-weight-normal is-size-5-mobile is-size-5-tablet is-size-4-widescreen">{mainpitch.description}</h3>
                  </div>
                  <div class="video-responsive">
                    <iframe
                      src="https://player.cloudinary.com/embed/?cloud_name=dax8it&public_id=https%3A%2F%2Fres.cloudinary.com%2Fdax8it%2Fvideo%2Fupload%2Fv1575694094%2Fatjiujitsunyc%2FATJIUJITSUNYC_INTRO.mp4&fluid=true&controls=true&colors%5Baccent%5D=%2344c0ef&logo_image_url=https%3A%2F%2Fres.cloudinary.com%2Fdax8it%2Fimage%2Fupload%2Fv1549678229%2Fatjiujitsunyc%2Flogo.png&info%5Btitle%5D=WELCOME%20to%20ATJIUJITSUNYC%20&source_types%5B0%5D=mp4"
                      width="640"
                      height="480"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowfullscreen
                      frameborder="0"
                    ></iframe>
                  </div>

                  <br />
                </div>


              <section>
                <div className="columns">
                  <div className="column is-12">

                    <div className="tile   is-child box notification">
                    <h3 className="title has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                      {heading}
                    </h3>

                    <p className="subtitle has-text-weight-normal is-size-5-mobile is-size-5-tablet is-size-4-widescreen">{description}</p>
                    </div>
                  </div>
                </div>
                  {/* <Features gridItems={intro.blurbs} /> */ } 
                <div className="tile">
                  <div className="column is-half-desktop has-text-centered">
                    <Link className="btn" to="/products">
                      Our Programs
                    </Link>
                    </div>
                    <div className="column is-half-desktop has-text-centered">
                    <Link className="btn" to="/products#prices">
                    Monthly Fees
                    </Link>
                    </div>
                </div>
              </section> 

                <div className="column is-12">
                <hr></hr>
                <h3 className="title has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                     
                    Latest News
                  </h3>
                  <BlogRollHome />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
          publicURL
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 320, quality: 64) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
