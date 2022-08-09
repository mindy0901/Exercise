import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../constants/data";

const initialState = {
      colors: [
            { name: colors[0].name, src: colors[0].img, total: 0 },
            { name: colors[1].name, src: colors[1].img, total: 0 },
            { name: colors[2].name, src: colors[2].img, total: 0 },
            { name: colors[3].name, src: colors[3].img, total: 0 },
            { name: colors[4].name, src: colors[4].img, total: 0 },
            { name: colors[5].name, src: colors[5].img, total: 0 },
      ],
      randomColors: [
            { name: colors[3].name, src: colors[3].img },
            { name: colors[4].name, src: colors[4].img },
            { name: colors[5].name, src: colors[5].img },
      ],
      cash: 1000,
}

const colorSlice = createSlice({
      name: "color",
      initialState,
      reducers: {
            increment: (state, action) => {
                  const index = state.colors.findIndex((color) => color.name === action.payload)
                  if (state.cash > 0) {
                        state.colors[index].total += 100;
                        state.cash -= 100;
                  } else {
                        return { ...state };
                  }
            },
            decrement: (state, action) => {
                  const index = state.colors.findIndex((color) => color.name === action.payload)
                  if (state.colors[index].total > 0) {
                        state.colors[index].total -= 100;
                        state.cash += 100;
                  } else {
                        return { ...state }
                  }
            },
            play: (state, action) => {
                  const newRandomColors = [];
                  for (let i = 0; i < 3; i++) {
                        let luckyColorIndex = Math.floor(Math.random() * 6);
                        const luckyColor = state.colors[luckyColorIndex]
                        newRandomColors.push(luckyColor)
                  }
                  state.randomColors = newRandomColors;

                  if (action.payload === 30) {
                        state.randomColors.forEach((randomColor) => {
                              let index = state.colors.findIndex((color) => color.name === randomColor.name);
                              if (index !== -1) state.cash += state.colors[index].total;
                        })
                        // MONEY BACK
                        state.colors.forEach((color) => {
                              const index = state.randomColors.findIndex((randomColor) => randomColor.name === color.name);
                              if (index !== -1) state.cash += color.total
                        })
                        state.colors = state.colors.map(color => {
                              return { ...color, total: 0 }
                        })
                  }
            },
            reset: (state) => {
                  return initialState
            }
      }
})

export const { increment, decrement, play, reset } = colorSlice.actions;
export default colorSlice.reducer;