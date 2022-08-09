import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { bet, play } from './redux/reducers/diceSlice';

function App() {
      const dispatch = useDispatch();
      const { betChose, randomDices, winTimes, loseTimes , totalTimes} = useSelector((state) => state.diceSlice);
      console.log(randomDices);

      const handleBet = (chosen) => {
            dispatch(bet(chosen))
      }

      return (
            <div className="App">
                  <div className="container">
                        <div className="container__top">
                              <button onClick={() => handleBet("even")}>Even</button>
                              <div className="container__top__dices">
                                    {randomDices.map((randomDice, index) => (
                                          <img key={index} src={randomDice.img} alt="dice" />
                                    ))}
                              </div>
                              <button onClick={() => handleBet("odd")}>Odd</button>
                        </div>
                        <div className="container__bottom">
                              <div className="container__bottom__details">
                                    <span>Your bet: <span className='details__bet'>{betChose}</span></span>
                                    <span>Win times: {winTimes}</span>
                                    <span>Lose times: {loseTimes}</span>
                                    <span>Total play times: {totalTimes}</span>
                              </div>
                              <button className="container__bottom__button"
                                    onClick={() => {
                                          let times = 0;
                                          const random = setInterval(() => {
                                                times++;
                                                dispatch(play(times));
                                                if (times === 30) {
                                                      clearInterval(random);
                                                }
                                          }, 50)
                                    }}
                              >
                                    Play
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default App;
