import React from 'react';
import "./../Colors.css";

const Colors = () => {
      const colors = [];
      let color;

      const findPrimeNumber = (n) => {
            let flag = true;
            if (n < 2) {
                  flag = false;
            }
            else if (n == 2) {
                  flag = true;
            }
            else if (n % 2 == 0) {
                  flag = false;
            }
            else {
                  for (let i = 3; i < n - 1; i += 2) {
                        if (n % i == 0) {
                              flag = false;
                              break;
                        }
                  }
            }
            if (flag == true) {
                  color = { number: n, type: "prime" }
            }
            else {
                  color = { number: n, type: "odd" }
            }
      }

      for (var i = 0; i < 32; i++) {
            if (i !== 2 && i % 2 === 0) {
                  color = { number: i, type: "even" }
            } else {
                  findPrimeNumber(i)
            }
            colors.push(color);
            console.log(colors);
      }

      return (
            <div className='colors'>
                  {colors.map((color, index) => (
                        <div key={index} className={`box ${color.type}`}>{color.number}</div>
                  ))}
            </div>
      )
}

export default Colors