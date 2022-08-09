import React from 'react';
import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { tenHighestPopulation } from '../constants/data';

ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
);


export const options = {
      indexAxis: "y",
      plugins: {
            legend: {
                  display: false,
            },
            title: {
                  display: true,
                  text: 'Ten most populated countries',
            },
      },
      elements: { bar: { borderWidth: 2 } },
      responsive: true,
};

export const data = {
      labels: tenHighestPopulation.map(data => data.country),
      datasets: [
            {
                  data: tenHighestPopulation.map((data) => data.population),
                  borderColor: "rgb(255,165,2)",
                  backgroundColor: "rgb(255,165,2)"
            }
      ]
};

const WorldPopulation = () => {
      return (
            <Bar options={options} data={data} />
      )
}

export default WorldPopulation