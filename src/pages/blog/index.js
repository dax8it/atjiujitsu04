import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="title has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow: '0.5rem 0 0 rgb(0, 102, 204, 0.5), -0.5rem 0 0 rgb(0, 102, 204, 0.5)',
              backgroundColor: 'rgb(0, 102, 204, 0.5)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
