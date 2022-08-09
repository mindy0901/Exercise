import { phones } from "./constants/data";
import './App.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, changeQuantity, deleteProduct } from "./redux/reducers/cartSlice";

function App() {
      const [item, setItem] = useState(phones[0]);
      const [toggle, setToggle] = useState(false);
      const dispatch = useDispatch();
      const { products, totalPrice, quantity } = useSelector((state) => state.cartSlice)
      console.log(products);

      const handleQuantity = (type, id) => {
            console.log(type, id)
            dispatch(changeQuantity({ type, id }))
      }

      return (
            <div className="App">
                  <div className="container">
                        <div className="left">
                              {phones.map((phone, index) => (
                                    <div className="left__item" key={index}>
                                          <div className="item__img">
                                                <img src={phone.img} alt="phone" />
                                          </div>
                                          <span>{phone.name}</span>
                                          <div className="item__buttons">
                                                <button onClick={() => setItem(phone)}>Details</button>
                                                <button onClick={() => dispatch(addCart(phone))}>Add to Cart</button>
                                          </div>
                                    </div>
                              ))}
                        </div>
                        <div className="right">
                              <h3>Details</h3>
                              <div className="right__detail">
                                    <span>Screen</span>
                                    <span>{item.screen}</span>
                              </div>
                              <div className="right__detail">
                                    <span>System</span>
                                    <span>{item.system}</span>
                              </div>
                              <div className="right__detail">
                                    <span>Front camera</span>
                                    <span>{item.frontCamera}</span>
                              </div>
                              <div className="right__detail">
                                    <span>Back camera</span>
                                    <span>{item.backCamera}</span>
                              </div>
                              <div className="right__detail">
                                    <span>RAM</span>
                                    <span>{item.ram}</span>
                              </div>
                              <div className="right__detail">
                                    <span>ROM</span>
                                    <span>{item.rom}</span>
                              </div>
                              <button
                                    className="right__button"
                                    onClick={() => setToggle(true)}
                              >
                                    {`My cart (${quantity})`}
                              </button>
                        </div>
                        {toggle &&
                              <div className="modal">
                                    <div className="modal__container">
                                          <h3>My cart</h3>
                                          <span className="modal__totalPrice">Cart total price: ${totalPrice}</span>
                                          <table>
                                                <tbody>
                                                      <tr>
                                                            <th>Product ID</th>
                                                            <th>Product name</th>
                                                            <th>Image</th>
                                                            <th>Quantity</th>
                                                            <th>Price</th>
                                                            <th>Total Price</th>
                                                      </tr>
                                                      {products.map((product, index) => (
                                                            <tr key={index}>
                                                                  <td>{product.id}</td>
                                                                  <td>{product.name}</td>
                                                                  <td>
                                                                        <img src={product.img} alt="" />
                                                                  </td>
                                                                  <td>
                                                                        <button
                                                                              onClick={() => handleQuantity("+", product.id)}
                                                                        >+</button>
                                                                        {product.quantity}
                                                                        <button
                                                                              onClick={() => handleQuantity("-", product.id)}
                                                                        >-</button>
                                                                  </td>
                                                                  <td>{product.price}</td>
                                                                  <td>{product.quantity * product.price}</td>
                                                                  <td>
                                                                        <button
                                                                              className="modal__container__delete"
                                                                              onClick={() => dispatch(deleteProduct(product.id))}
                                                                        >
                                                                              delete
                                                                        </button>
                                                                  </td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                          <button className="modal__exit" onClick={() => setToggle(false)}>X</button>
                                    </div>
                              </div>
                        }
                  </div>
            </div>
      );
}

export default App;
