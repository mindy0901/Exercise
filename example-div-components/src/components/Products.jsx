import React from 'react'
import { phones } from "./../constants/data"
import Product from './Product'

const Products = () => {
      return (
            <div className='products'>
                  <h2>BEST SMARTPHONE</h2>
                  <div className="products__container">
                        {phones.map((phone, index) => (
                              <Product item={phone} key={index} />
                        ))}
                  </div>
            </div>
      )
}

export default Products