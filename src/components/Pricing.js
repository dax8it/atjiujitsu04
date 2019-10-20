import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="column is-mobile">
    {data.map(price => (

       <div key={price.plan} className="column is-mobile">
          <div className="column is-12">              
            <section className="section-padding">

              <div class="tile is-ancestor">
                <div class="tile">
                  <div class="tile is-child box notification">
                    <h4 className="has-text-centered has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-2-widescreen">
                      {price.plan}
                    </h4>
                    <h2 className="is-size-2-mobile is-size-1-tablet is-size-1-widescreen has-text-weight-bold has-text-primary has-text-centered">
                      ${price.price}
                    </h2>
                    <p className="has-text-centered has-text-weight-bold is-size-4-mobile is-size-4-tablet is-size-3-widescreen">{price.description}</p>
                      <ul>
                        {price.items.map(item => (
                          <li key={item} className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen has-text-weight-semibold">
                            {item}
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div>



    ))}
  </div>

  
  
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
