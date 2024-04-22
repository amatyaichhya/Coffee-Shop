import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  user: null;
  token: string | undefined;
}

const initialState = {
  isLoggedIn: false,
  user: null,
  token: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    resetAuthState: () => initialState,
  },
  // extraReducers: builder => {},
});

export const {setLoggedIn, resetAuthState} = authSlice.actions;
export default authSlice.reducer;
