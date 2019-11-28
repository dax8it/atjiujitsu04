import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="http://www.atjiujitsunyc.com/" />
        <meta property="og:video:secure_url" content="https://vimeo.com/317633674" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="business:contact_data:street_address" content="80-22 Northern Blvd." />
        <meta property="business:contact_data:locality" content="Jackson Heights" />
        <meta property="business:contact_data:region" content="NY" />
        <meta property="business:contact_data:postal_code" content="11372" />
        <meta property="business:contact_data:country_name" content="United States" />

      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer2 />
      <Footer />
    </div>
  )
}

export default TemplateWrapper
