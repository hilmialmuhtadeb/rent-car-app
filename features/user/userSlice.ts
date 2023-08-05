import { User, UserProfile, defaultUserProfile } from '@/types/User';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

interface UserState {
  profile: UserProfile;
}

const initialState: UserState = {
  profile: defaultUserProfile
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    resetProfile: (state) => {
      state.profile = defaultUserProfile;
    }
  }
})

export const { setProfile } = userSlice.actions

export default userSlice.reducer