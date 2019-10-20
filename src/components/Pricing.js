import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="column is-mobile">
    {data.map(price => (

       <div key={price.plan} className="column is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth">              
            <section className="section-padding">

              <div class="tile is-ancestor">
                <div class="tile is-three-fifths is-offset-one-fifth">
                  <div class="tile is-child box notification">
                    <h4 className="has-text-centered has-text-weight-bold is-size-2">
                      {price.plan}
                    </h4>
                    <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                      ${price.price}
                    </h2>
                    <p className="has-text-centered has-text-weight-bold is-size-3">{price.description}</p>
                      <ul>
                        {price.items.map(item => (
                          <li key={item} className="is-size-4 has-text-weight-semibold">
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
