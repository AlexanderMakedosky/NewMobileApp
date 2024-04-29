import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getImages } from '../api/images';
import { UnsplashPhoto } from '../../types/Image';

type ImagesState = {
  items: UnsplashPhoto[],
  loaded: boolean,
  hasError: string | null,
};

const imagesState: ImagesState = {
  items: [],
  loaded: true,
  hasError: null,
};

export const imagesInit = createAsyncThunk('images/fetch', getImages);

const imagesSlice = createSlice({
  name: 'images',
  initialState: imagesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(imagesInit.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(imagesInit.fulfilled, (state, action) => {
      state.items = action.payload as [];
      state.loaded = false;
    });
    builder.addCase(imagesInit.rejected, (state) => {
      state.loaded = false;
      state.hasError = 'Error';
    });
  }
});

export const { } = imagesSlice.actions;

export default imagesSlice.reducer;
