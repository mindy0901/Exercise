import './App.css';
import { images } from "./constants/images";
import { glasses } from "./constants/data";
import { useState } from 'react';

function App() {
      const [item, setItem] = useState(glasses[0]);

      return (
            <div className="App">
                  <div className="container">
                        <div className="left">
                              <div className="left__model">
                                    <img src={images.model} alt="model" />
                                    <div className="left__model__desc">
                                          <span>{item.name}</span>
                                          <span>{item.price}</span>
                                    </div>
                                    <div className="left__model__glasses">
                                          <img src={item.img} alt="" />
                                    </div>
                              </div>
                        </div>
                        <div className="right">
                              {glasses.map((item, index) => (
                                    <div
                                          onClick={() => setItem(item)}
                                          key={index}
                                          className="right__item"
                                    >
                                          <img
                                                src={item.img} alt="glasses" />
                                    </div>
                              ))}
                        </div>
                  </div>

            </div>
      );
}

export default App;
