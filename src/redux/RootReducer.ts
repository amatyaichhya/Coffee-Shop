import {combineReducers} from '@reduxjs/toolkit';

import {API_REDUCER_KEY, AppApi} from '@cs/apis';
import {AuthReducer} from './slices';

export const rootReducer = combineReducers({
  [API_REDUCER_KEY]: AppApi.reducer,
  auth: AuthReducer,
});
