import TIKTUKS from 'mocks/tiktuks';
import reducer from './index';
import { initialState } from './state';
import * as actions from './actions';

describe('test trending reducer', () => {
  it('test initializing reducer', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState);
  });

  it('test set trending action', () => {
    expect(reducer(undefined, actions.setTrending({ tiktuks: [] }))).toEqual({
      ...initialState,
      items: [],
    });
  });

  it('test add trending action', () => {
    expect(
      reducer(undefined, actions.addTrending({ tiktuks: TIKTUKS })),
    ).toEqual({
      ...initialState,
      items: TIKTUKS,
    });
  });

  it('test set page action', () => {
    expect(reducer(undefined, actions.setPage({ page: 1 }))).toEqual({
      ...initialState,
      options: {
        ...initialState.options,
        pageNumber: 1,
      },
    });
  });

  it('test set loading action', () => {
    expect(reducer(undefined, actions.setLoading({ isLoading: true }))).toEqual(
      {
        ...initialState,
        isLoading: true,
      },
    );
  });

  it('test set error action', () => {
    expect(reducer(undefined, actions.setError({ isError: true }))).toEqual({
      ...initialState,
      isError: true,
    });
  });
});
