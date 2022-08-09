import { createSlice } from "@reduxjs/toolkit";
import { diceData } from "../../constants/data";


const initialState = {
      randomDices: [
            { id: diceData[0].id, img: diceData[0].img },
            { id: diceData[0].id, img: diceData[0].img },
            { id: diceData[0].id, img: diceData[0].img },
      ],
      betChose: "",
      result: "",
      winTimes: 0,
      loseTimes: 0,
      totalTimes: 0,
}

const diceSlice = createSlice({
      name: "dice",
      initialState,
      reducers: {
            bet: (state, action) => {
                  state.betChose = action.payload
            },
            play: (state, action) => {
                  let result = 0;
                  let newRandomDices = [];
                  for (let i = 0; i < 3; i++) {
                        let count = Math.floor(Math.random() * 6);
                        let index = diceData.findIndex((x) => x.id === count)
                        newRandomDices.push(diceData[index]);
                        result += count;
                  }
                  state.randomDices = [...newRandomDices];
                  if (action.payload === 30) {
                        result % 2 === 0
                              ? state.result = "even"
                              : state.result = "odd"
                        if (state.result === state.betChose) {
                              state.winTimes += 1
                        }
                        else {
                              state.loseTimes += 1;
                        }
                        state.totalTimes += 1;
                  }
            },
            reset: (state) => {
                  return initialState
            }
      }
})

export const { play, reset, bet } = diceSlice.actions;
export default diceSlice.reducer;