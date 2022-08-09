import React from 'react'
import { data } from './WorldPopulation'

const datas = [
      { color: "#4e417e" },
      { color: "#02dc92" },
      { color: "#dfbaa0" },
      { color: "#d8394e" },
      { color: "#7c31d3" },
      { color: "#7fcfd2" },
      { color: "#0e5d46" },
      { color: "#d98590" },
      { color: "#7923d7" },
      { color: "#6e5eeb" },
      { color: "#2a176b" },
      { color: "#dea1d8" },
      { color: "#cbae6f" },
      { color: "#b6841d" },
      { color: "#62df7d" },
      { color: "#9e4d2c" },
      { color: "#393b73" },
      { color: "#1a4f07" },
      { color: "#1a4607" },
      { color: "#045529" },
      { color: "#04e754" },
      { color: "#697980" },
      { color: "#018120" },
      { color: "#5bdcc7" },
      { color: "#7010b2" },
      { color: "#c50007" },
      { color: "#cfe583" },
      { color: "#cdb58e" },
      { color: "#298b5d" },
      { color: "#58e253" },
      { color: "#a9c3c5" },
      { color: "#66fec5" },



]

const ColorsHex = () => {
      return (
            <div className='colorsHex'>
                  {datas.map((data, index) => (
                        <div style={{ backgroundColor: data.color }} className="hex__item" key={index}>
                              {data.color}
                        </div>
                  ))
                  }
            </div>
      )
}

export default ColorsHex