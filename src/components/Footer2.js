import React from 'react'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import youtube from '../img/social/YouTube_dark_icon_.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMap, faUsers } from "@fortawesome/free-solid-svg-icons"

const Footer2 = class extends React.Component {
  render() {
    return (








<div className="columns">
<div className="column is-12">

<div className="container">

	<div class="tile is-ancestor">
			<div class="tile  is-12 is-parent">
				
				<div class="tile is-child box notification">

				<article className="media">
							<figure className="media-left">

								<span className="icon is-medium">
                            <FontAwesomeIcon icon={faMap} className="has-text-link" />
                          </span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">LOCATION</h1>
									<p className="subtitle is-size-5">
										Conveniently located near E/F/7/R/M trains on Northern Blvd between 80th & 81st Sts.<p></p>
										<a
											href="https://g.page/at-jiu-jitsu-nyc?share"
											target="_blank"
											rel="noopener noreferrer"
											>
											80-22 Northern Blvd. <br />
											Jackson Heights NY 11372<br />
											U.S.A
										</a> 
									</p>
								</div>
							</div>
						</article>
				</div>
				
				<div class="tile is-child box notification">

					<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
                            <FontAwesomeIcon icon={faEnvelope} className="has-text-link" />
                          </span>		
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">CONTACT US</h1>
									<p className="subtitle is-size-5">
										We would love to hear from you.
										<p></p>
										Email:<br />
										<a href="mailto:atjiujitsunyc@gmail.com"> atjiujitsunyc@gmail.com</a><br />
										<p></p>
										Call Us <br /><b>(917)-745-1772</b>
									</p>
								</div>
							</div>
					</article>
				</div>	
				
				<div class="tile is-child box notification">
					
					<article className="media">
						<figure className="media-left">
							<span className="icon is-medium">
								<FontAwesomeIcon icon={faUsers} className="has-text-link" />
							</span>
						</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">FIND US</h1>
									<p className="subtitle is-size-5">Find us on social media and get to know us.</p>
							<div className="social">
								<a title="facebook" href="https://www.facebook.com/ATjiujitsuNYC/">
									<img
										src={facebook}
										alt="Facebook"
										style={{ width: '2em', height: '2em' }}
									/>
								</a>
								<a title="instagram" href="https://instagram.com/jiujitsunyc">
									<img
										src={instagram}
										alt="Instagram"
										style={{ width: '2em', height: '2em' }}
									/>
								</a>
								<a title="youtube" href="https://www.youtube.com/channel/UCdi6CZkOmv_5dNZUhlVOkgw">
									<img
										src={youtube}
										alt="youtube"
										style={{ width: '2em', height: '2em' }}
									/>
								</a>
								</div>
							</div>
							</div>
					</article>
				</div>
			</div>
	  </div>
</div>
</div>
</div>


    )
  }
}

export default Footer2
