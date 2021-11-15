import { createSlice } from "@reduxjs/toolkit";


const trackedCoinsSlice = createSlice({
    name: "trackedCoinsSlice",
    initialState: [],
    reducers: {
        tracking(state, action) {
            state.push(action.payload);
        },
        updating(state, action) {
            const findIndex = state.findIndex(coin => `${coin.name}USDT` === action.payload.symbol);

            if (findIndex === -1) {
                return;
            }

            state[findIndex].price = action.payload.price;
        },
        remove(state, action) {
            state.splice(action.payload, 1);
        }
    }
});

export const { tracking, updating, remove } = trackedCoinsSlice.actions;
export const trackedCoinsReducer = trackedCoinsSlice.reducer;
