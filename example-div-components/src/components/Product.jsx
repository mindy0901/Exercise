import React from 'react'

const Product = ({ item }) => {
      return (
            <div className='product'>
                  <div className="product__img">
                        <img src={item.src} alt="phone" />
                  </div>
                  <div className="product__details">
                        <div className="product__details__name">{item.name}</div>
                        <div className="product__details__desc">{item.desc}</div>
                  </div>
                  <div className="product__button">
                        <button>Details</button>
                        <button>Add to Cart</button>
                  </div>
            </div>
      )
}

export default Product