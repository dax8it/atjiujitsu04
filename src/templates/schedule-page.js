import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SchedulePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div
    className="full-width-image-container margin-top-0"
    style={{
      backgroundImage: `url('/img/index-kids.jpg')`,
    }}
  >
    <h1
      className="has-text-centered has-text-weight-semibold is-size-2"
      style={{
        boxShadow: '0.5rem 0 0 rgb(0, 102, 204, 0.5), -0.5rem 0 0 rgb(0, 102, 204, 0.5)',
        backgroundColor: 'rgb(0, 102, 204, 0.5)',
        color: 'white',
        padding: '1rem',
      }}
    >
      Adult and Kids Schedules
    </h1>
  </div>
      
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SchedulePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SchedulePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SchedulePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SchedulePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SchedulePage

export const schedulePageQuery = graphql`
  query SchedulePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
