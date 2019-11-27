import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'



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


<section className="section section--gradient">
  <div className="container">
    <div className="section">

    <div className="columns is-10">
        <div className="column is-10">
          <h2 className="contactTitle has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">Write us</h2>
          <h3 className="subTitle has-text-weight-semibold is-size-4-mobile is-size-3-tablet is-size-2-widescreen">We would love to meet you!</h3>
          <br></br>
        </div>
        </div>

          <div className="columns">

            <div className="columns box">
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

                        <div class="field">
                        <label class="label">Your Name:</label> 
                        <div class="control has-icons-left">
                        <input type="text" class="textarea" rows="1" required/>  
                      </div>
                      </div>

                      <div class="field">
                      <label class="label">Your Email:</label>
                        <div class="control">
                        <input type="email" class="textarea" rows="1" name="email" required/>
                        </div>
                      </div>

                      <div class="field">
                      <label class="label">Message:</label>
                        <div class="control">
                        <textarea name="message"  class="textarea" rows="10" required></textarea>
                        </div>
                      </div>

                      <div class="field is-grouped">
                        <div class="control">
                          <button class="button is-link" type="submit" >Submit</button>
                        </div>
                        <div class="control">
                          <button class="button">Cancel</button>
                        </div>
                      </div>


                    </form>
            

{/*
            <section>
              <div className="container contacts">
                <div className="row">
                  <div className="column">
                  </div>
                  <div className="column">

                    <section className="contactSplit">

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

*/}

          </div>

      </div>
      </div>
    </div>
</section>



      </Layout>
    )
  }
}
