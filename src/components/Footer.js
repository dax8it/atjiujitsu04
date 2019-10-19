import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import youtube from '../img/social/YouTube_dark_icon_.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">

        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
{/*              <div className="column is-6">
                <section className="container has-background-black has-text-white-ter">
                <p className="column is-size-4">LOCATION</p> 
                <p className="container has-background-black has-text-white-ter">
                <a

                        href="https://g.page/at-jiu-jitsu-nyc?share"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      80-22 Northern Blvd. 
                            <br />
                            Jackson Heights NY 11372
                            <br />
                            U.S.A
                            </a></p>                

                </section>
              </div>

*/}               
              <div className="column is-4 is-offset-1">
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
              <div className="column is-4">
              
                <section className="container has-background-black has-text-white-ter">
                <div className="column is-size-4">LOCATION</div> 
                <div className="has-background-black has-text-white-ter">
                <a

                        href="https://g.page/at-jiu-jitsu-nyc?share"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      80-22 Northern Blvd. 
                            <br />
                            Jackson Heights NY 11372
                            <br />
                            U.S.A
                            </a>                
                            </div>
                </section>
              
                <div className="column is-size-4">CONTACT US</div>
             Email:
               <a href="mailto:atjiujitsunyc@gmail.com"> atjiujitsunyc@gmail.com</a><br />
              Call Us <b>(917)-745-1772</b>

              <div className="social">
                <a title="facebook" href="https://www.facebook.com/ATjiujitsuNYC/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/jiujitsunyc">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCdi6CZkOmv_5dNZUhlVOkgw">
                  <img
                    src={youtube}
                    alt="youtube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '5em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
