import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGames = createAsyncThunk('games/getGames', async (_,thunkApi) => {
    try {
        const res = await axios('https://643d90c2f0ec48ce905f7976.mockapi.io/games')
        return res.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }
})

const gameSlice = createSlice({
    name: 'notices',
    initialState: {
        listGames: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getGames.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getGames.fulfilled, (state, action) => {
          state.listGames = action.payload;
          state.isLoading = false;
        });
        builder.addCase(getGames.rejected, (state) => {
            console.log(state)
            state.isLoading = false;
          });
      },
})
export default gameSlice.reducer;