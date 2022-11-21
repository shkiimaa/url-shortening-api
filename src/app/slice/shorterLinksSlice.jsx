import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  error: {},
};

export const addUrl = createAsyncThunk('shorterLinksSlice/addUrl', async (payload, thunkAPI) => {
  try {
    console.log(thunkAPI);
    const response = await axios.post(`https://api.shrtco.de/v2/shorten?url=${payload}`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const shorterLinksSlice = createSlice({
  name: 'shorterLinksSlice',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(addUrl.pending, (state, action) => {
      return state;
    });

    builder.addCase(addUrl.fulfilled, (state, action) => {
      let newState = { ...state };
      newState.data = [...newState.data, action.payload.result];
      return newState;
    });
    builder.addCase(addUrl.rejected, (state, action) => {
      let newState = { ...state };
      newState.error = action.payload;
      return newState;
    });
  },
});

export default shorterLinksSlice;
