import { cars, colors } from "./data";
import "./app.css";
import { useState } from "react";

function App() {
      const [color, setColor] = useState("black");
      console.log(color)

      return (
            <div className="App">
                  {colors.map((color, index) => (
                        <img
                              key={index}
                              className='ball'
                              src={color.src}
                              alt="color"
                              onClick={() => setColor(color.color)}
                        />
                  ))}
                  {cars
                        .filter((car) => car.color === color)
                        .map((car, index) => (
                              <img
                                    key={index}
                                    src={car.src}
                                    alt=""
                                    className="car"
                              />
                        ))}
            </div>
      );
}

export default App;
