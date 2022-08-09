import React from 'react'
import { promotion } from "./../constants/data";

const Promotion = () => {
      return (
            <div className='promotion'>
                  <h2>PROMOTION</h2>
                  <div className="promotion__container">
                        {promotion.map((item, index) => (
                              <div className="promotion__item" key={index}>
                                    <img src={item.src} alt="promotion" />
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Promotion