import {useDispatch} from 'react-redux';

import type {AppDispatch} from '@cs/redux/Store';

export const useAppDispatch: () => AppDispatch = useDispatch;
