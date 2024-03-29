import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">

        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">            
              <div className="column is-12">
                <section>
                  <ul className="menu-list">
                  <li>
                      <Link className="navbar-item" to="/">
                        Home
                      </Link>
                    </li>
                  <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Programs and Prices
                      </Link>
                    </li>
                      <Link className="navbar-item" to="/schedule">
                        Schedule
                      </Link>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          AT JIUJITSU School 2019. All Rights Reserved <br /> <img
            src={logo}
            alt="AtjiujitsuNYC"
            style={{ width: '10em', height: '3em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
