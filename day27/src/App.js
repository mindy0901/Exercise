import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
      const [quantity, setQuantity] = useState(36)
      const [colors, setColors] = useState([])
      const inputRef = useRef(null)

      useEffect(() => {
            handleClick()
      }, [])

      const handleClick = () => {
            const newRandomColors = [];
            for (let i = 0; i < quantity; i++) {
                  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                  newRandomColors.push(randomColor)
            }
            setColors([...newRandomColors])
            inputRef.current.focus()
      }

      return (
            <div className="App">
                  <input ref={inputRef} onChange={(e) => setQuantity(e.target.value)} type="number" value={quantity} />
                  <button onClick={handleClick}>Generator</button>
                  <div className="colors__container">
                        {colors.map((color, index) => (
                              <div className="color" key={index} style={{ backgroundColor: color }}>
                                    <span>{color}</span>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

export default App;
