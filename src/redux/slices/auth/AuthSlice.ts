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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetAuthState: () => initialState,
  },
  // extraReducers: builder => {},
});

export const {setLoggedIn, setUser, resetAuthState} = authSlice.actions;
export default authSlice.reducer;
