import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import  favoriteReducer  from './favorite-reducer';

export const store = configureStore({
  reducer: {
    recipes: favoriteReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector = useSelector.withTypes<RootState>(); // Export a hook that can be reused to resolve types

export default store;
