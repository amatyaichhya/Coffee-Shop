import Config from 'react-native-config';

import {AppApi} from '../AppApi';
import {keysToCamel} from '@cs/utils';

export const CoffeeProductsApi = AppApi.injectEndpoints({
  endpoints: build => ({
    getCoffeeProductList: build.query({
      query: name => ({
        url: `${Config.API_URL}?name=${name}`,
        method: 'GET',
      }),
      transformErrorResponse: (response: any) => keysToCamel(response),
      transformResponse: (response: any) => keysToCamel(response),
    }),
    getCoffeeProductDetail: build.query({
      query: productId => ({
        url: `${Config.API_URL}/${productId}`,
        method: 'GET',
      }),
      transformErrorResponse: (response: any) => keysToCamel(response),
      transformResponse: (response: any) => keysToCamel(response),
    }),
  }),
  overrideExisting: true,
});

export const {useGetCoffeeProductListQuery, useGetCoffeeProductDetailQuery} =
  CoffeeProductsApi;
