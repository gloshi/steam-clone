import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReview = createAsyncThunk('reviews/getReview', async (_,thunkApi) => {
    try {
        const res = await axios('https://643d90c2f0ec48ce905f7976.mockapi.io/review')
        return res.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }
})

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        listReviews: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getReview.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getReview.fulfilled, (state, action) => {
          state.listReviews = action.payload;
          state.isLoading = false;
        });
        builder.addCase(getReview.rejected, (state) => {
            console.log(state)
            state.isLoading = false;
          });
      },
})
export default reviewSlice.reducer;