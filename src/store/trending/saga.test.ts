import { runSaga } from 'redux-saga';
import { TikTuksService } from 'services';
import TIKTUKS from 'mocks/tiktuks';
import { AnyAction } from 'redux';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { initialState, ITrendingState } from './state';
import { getTrandingWorker as saga } from './saga';

jest.mock('services');

describe('test trending saga', () => {
  it('test if getting trends works ', async () => {
    (TikTuksService.getTikTuks as jest.Mock).mockResolvedValue(TIKTUKS);
    const dispatchedActions: AnyAction[] = [];

    await runSaga<
      AnyAction,
      { trending: ITrendingState },
      ReturnType<actions.getTrending>
    >(
      {
        dispatch: (action) => dispatchedActions.push(action),
        getState: () => ({ trending: initialState }),
      },
      saga,
      actions.getTrending({ toSet: true }),
    ).toPromise();

    expect(dispatchedActions).toEqual([
      {
        payload: {
          isLoading: true,
        },
        type: actionsTypes.SET_LOADING,
      },
      {
        payload: {
          isError: false,
        },
        type: actionsTypes.SET_ERROR,
      },
      {
        payload: {
          tiktuks: TIKTUKS,
        },
        type: actionsTypes.SET_TRENDING,
      },
      {
        payload: {
          isLoading: false,
        },
        type: actionsTypes.SET_LOADING,
      },
    ]);
  });

  it('test if getting trends works with errors', async () => {
    (TikTuksService.getTikTuks as jest.Mock).mockImplementation(() => {
      throw new Error();
    });
    const dispatchedActions: AnyAction[] = [];

    await runSaga<
      AnyAction,
      { trending: ITrendingState },
      ReturnType<actions.getTrending>
    >(
      {
        dispatch: (action) => dispatchedActions.push(action),
        getState: () => ({
          trending: initialState,
        }),
      },
      saga,
      actions.getTrending({ toSet: true }),
    ).toPromise();

    expect(dispatchedActions).toEqual([
      {
        payload: {
          isLoading: true,
        },
        type: actionsTypes.SET_LOADING,
      },
      {
        payload: {
          isError: false,
        },
        type: actionsTypes.SET_ERROR,
      },
      {
        payload: {
          isError: true,
        },
        type: actionsTypes.SET_ERROR,
      },
      {
        payload: {
          isLoading: false,
        },
        type: actionsTypes.SET_LOADING,
      },
    ]);
  });
});
