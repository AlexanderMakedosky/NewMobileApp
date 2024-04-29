import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import imagesReducer from '../features/imagesSlicer';
// import productReducer from '../components/features/productSlicer';
// import favouriteReducer from '../components/features/favouriteSlicer';
// import cartReducer from '../components/features/cartSlicer
// import commentReducer from '../components/features/commentSlicer';


export const store = configureStore({
  reducer: {
    images: imagesReducer
    // products: productReducer,
    // favourite: favouriteReducer,
    // cart: cartReducer,
    // comments: commentReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
