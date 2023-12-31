import { configureStore } from '@reduxjs/toolkit'
import carReducer from '@/features/car/carSlice';
import authReducer from '@/features/auth/authSlice';
import userReducer from '@/features/user/userSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    auth: authReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch