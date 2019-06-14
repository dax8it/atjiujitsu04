import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>

<section>
  <div className="row1">

              <div className="column2">
                <section className="section">
                  <div className="container">
                    <div className="content">
                      <form
                        name="AT3-contact" 
                        method="POST" 
                        data-netlify="true"
                        data-netlify-honeypot="bot-field">
                          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                          <input type="hidden" name="form-name" value="AT3-contact" />
                          <div hidden>
                            <label>
                              Don’t fill this out:{' '}
                              <input name="bot-field" onChange={this.handleChange} />
                            </label>
                          </div>
                          <div className="col-lg-12 text-center">
                            <h2 className="contactTitle">Write us</h2>
                            <h3 className="subTitle">We would love to meet you!</h3>
                            <br></br>
                          </div>
                        <p>
                          <label>Your Name: <input type="text" name="name" required/></label>   
                        </p>
                        <p>
                          <label>Your Email: <input type="email" name="email" required/></label>
                        </p>
                        <p>
                          <label>Message: <textarea name="message"  rows="6" required></textarea></label>
                        </p>
                        <p>
                          <button type="submit">Send</button>
                        </p>
                      </form>
                    </div>
                  </div>
                </section>
              </div>


          <div class="column2">
            <section>
              <div className="container contacts">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                  </div>
                  <div className="col-lg-4 col-md-12">

                    <section className="conatctSplit">

                      <section>
                        <div className="contact-method">
                          <span className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>
                          <h3>Email</h3>
                          <a href="#">atjiujitsunyc@gmail.com</a>
                        </div>
                      </section>

                      <section>
                        <div className="contact-method">
                          <span className="icon">
                            <FontAwesomeIcon icon={faPhone} />
                          </span>
                          <h3>Phone</h3>
                          <span>(917)-745-1772</span>
                        </div>
                      </section>

                      <section>
                        <div className="contact-method">
                          <span className="icon">
                            <FontAwesomeIcon icon={faHome} />
                          </span>
                          <h3>Address</h3>
                          <span>
                            80-22 Northern Blvd. 
                            <br />
                            Jackson Heights NY 11372
                            <br />
                            U.S.A
                          </span>
                        </div>
                      </section>

                    </section>
                  </div>
                </div>
              </div>
            </section>
          </div>

  </div>
</section>





      </Layout>
    )
  }
}
