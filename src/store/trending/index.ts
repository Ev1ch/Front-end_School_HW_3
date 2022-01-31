import { createReducer } from '@reduxjs/toolkit';
import { TSelector } from 'helpers';
import { useAppSelector } from 'store';
import { initialState, ITrendingState } from './state';
import * as actionsTypes from './actions-types';
import * as actions from './actions';

const reducer = createReducer<ITrendingState>(initialState, {
  [actionsTypes.SET_TRENDING]: (
    state,
    { payload: { tiktuks } }: ReturnType<typeof actions.setTrending>,
  ) => ({
    ...state,
    items: tiktuks,
  }),
  [actionsTypes.ADD_TRENDING]: (
    state,
    { payload: { tiktuks } }: ReturnType<typeof actions.addTrending>,
  ) => ({
    ...state,
    items: [...(state.items || []), ...tiktuks],
  }),
  [actionsTypes.SET_LOADING]: (
    state,
    { payload: { isLoading } }: ReturnType<typeof actions.setLoading>,
  ) => ({
    ...state,
    isLoading,
  }),
  [actionsTypes.SET_ERROR]: (
    state,
    { payload: { isError } }: ReturnType<typeof actions.setError>,
  ) => ({
    ...state,
    isError,
  }),
});

export const useTikTuksSelector = (selector: TSelector<ITrendingState>) =>
  useAppSelector((state) => selector(state.trending));

export default reducer;
