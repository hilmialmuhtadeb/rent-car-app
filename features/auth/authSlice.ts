import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthInformation {
  id: number;
  email: string;
  username: string;
  role: number;
}

interface AuthState {
  isLogin: boolean;
  isAdmin: boolean;
  authInformation: AuthInformation;
}

const initialState: AuthState = {
  isLogin: false,
  isAdmin: false,
  authInformation: {
    id: 0,
    email: '',
    username: '',
    role: 0
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    setAuthInformation: (state, action: PayloadAction<AuthInformation>) => {
      state.authInformation = action.payload;
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    }
  }
})

export const { login, logout, setAuthInformation, setAdmin } = authSlice.actions

export default authSlice.reducer