import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="column is-12">


    {data.map(price => (

       <div key={price.plan} className="column box">            


            <h3 className="subtitle has-text-weight-semibold is-size-4-mobile is-size-2-tablet is-size-2-widescreen ">{price.plan}</h3>
                    <h2 className="is-size-2-mobile is-size-1-tablet is-size-1-widescreen has-text-weight-bold has-text-primary has-text-centered">${price.price}</h2>
                    <p className="has-text-centered has-text-weight-bold is-size-5-mobile is-size-4-tablet is-size-3-widescreen has-text-centered">{price.description}</p>
                      <ul className="is-size-5-mobile is-size-4-tablet is-size-3-widescreen has-text-weight-regular" >
                        {price.items.map(item => (
                          <li key={item} className="is-size-5-mobile is-size-4-tablet is-size-4-widescreen">
                            {item}
                          </li>
                        ))}
                      </ul>
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
