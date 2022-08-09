import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, play, reset } from './redux/reducers/colorSlice';

function App() {
      const { colors, randomColors, cash, cashPending } = useSelector((state) => state.colorSlice);
      console.log(cashPending)
      const dispatch = useDispatch();

      return (
            <div className="App" >
                  <div className="container">
                        <div className="container__top">
                              <h1 className="container__top__title" >Color Pick</h1>
                              <div className="container__top__totalCash">{cash}$</div>
                        </div>
                        <div className="container__bottom">
                              <div className="container__bottom__colors">
                                    {colors.map(color => (
                                          <div className="container__bottom__color__item" key={color.name}>
                                                <div className="item__img">
                                                      <img src={color.src} alt="car" />
                                                </div>
                                                <div className="item__bet">
                                                      <span>{color.name}</span>
                                                      <button
                                                            onClick={() => dispatch(increment(color.name))}
                                                      >+</button>
                                                      <span>{color.total}</span>
                                                      <button onClick={() => dispatch(decrement(color.name))}>-</button>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                              <div className="container__bottom__play">
                                    {randomColors.map((randomColor, index) => (
                                          <div key={index} className="bottom__play__randomColor">
                                                <img src={randomColor.src} alt="randomcolor" />
                                          </div>
                                    ))}
                                    <button
                                          onClick={() => {
                                                let times = 0;
                                                const randomColor = setInterval(() => {
                                                      times++;
                                                      dispatch(play(times));
                                                      if (times === 30) {
                                                            clearInterval(randomColor);
                                                      }
                                                }, 50)
                                          }}
                                    >
                                          Play
                                    </button>
                                    <button onClick={() => dispatch(reset())}>Reset</button>
                              </div>

                        </div>
                  </div>
            </div>
      );
}

export default App;
