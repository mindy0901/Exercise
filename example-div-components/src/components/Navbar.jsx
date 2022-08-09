import React from 'react'

const Navbar = () => {
      return (
            <div className='navbar'>
                  <div className="navbar__container">
                        <div className="navbar__logo">CyberSoft</div>
                        <ul className="navbar__items">
                              <li className="navbar__item">
                                    <a href="#" className="navbar__item__link">Home</a>
                              </li>
                              <li className="navbar__item">
                                    <a href="#" className="navbar__item__link">News</a>
                              </li>
                              <li className="navbar__item">
                                    Products
                                    <div className="navbar__item__products">
                                          <a href="#" className="navbar__item__link">Smartphone</a>
                                          <a href="#" className="navbar__item__link">Laptop</a>
                                    </div>
                              </li>
                              <li className="navbar__item">
                                    <a href="#" className="navbar__item__link">Forum</a>
                              </li>
                        </ul>
                  </div>
            </div>
      )
}

export default Navbar