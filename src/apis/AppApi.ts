import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const API_REDUCER_KEY = 'AppApi';

export const AppApi = createApi({
  reducerPath: API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({baseUrl: Config.API_URL}),
  endpoints: () => ({}),
  tagTypes: [],
});
