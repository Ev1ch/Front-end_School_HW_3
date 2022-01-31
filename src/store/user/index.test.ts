import USER from 'mocks/user';
import USER_FEED from 'mocks/user-feed';
import { initialState } from './state';
import * as actions from './actions';
import reducer from './index';

describe('test trending reducer', () => {
  it('test initializing reducer', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState);
  });

  it('test set user action', () => {
    expect(
      reducer(
        undefined,
        actions.setUser({
          feed: {
            items: USER_FEED.itemList,
          },
          information: { item: USER },
        }),
      ),
    ).toEqual({
      ...initialState,
      feed: {
        ...initialState.feed,
        items: USER_FEED.itemList,
      },
      information: {
        ...initialState.information,
        item: USER,
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
