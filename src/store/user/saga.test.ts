import { runSaga } from 'redux-saga';
import { UserService } from 'services';
import USER from 'mocks/user';
import USER_FEED from 'mocks/user-feed';
import { AnyAction } from 'redux';
import * as actionsTypes from './actions-types';
import * as actions from './actions';
import { initialState, IUserState } from './state';
import { getUserWorker as saga } from './saga';

jest.mock('services');

describe('test trending saga', () => {
  const nick = '%nick%';

  it('test if getting trends works ', async () => {
    (UserService.getUser as jest.Mock).mockResolvedValue(USER);
    (UserService.getUserFeed as jest.Mock).mockResolvedValue(USER_FEED);
    const dispatchedActions: AnyAction[] = [];

    await runSaga<AnyAction, { user: IUserState }, ReturnType<actions.getUser>>(
      {
        dispatch: (action) => dispatchedActions.push(action),
        getState: () => ({ user: initialState }),
      },
      saga,
      actions.getUser({ nick }),
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
          information: { item: USER },
          feed: { items: USER_FEED.itemList },
        },
        type: actionsTypes.SET_USER,
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
    (UserService.getUser as jest.Mock).mockImplementation(() => {
      throw new Error();
    });
    const dispatchedActions: AnyAction[] = [];

    await runSaga<AnyAction, { user: IUserState }, ReturnType<actions.getUser>>(
      {
        dispatch: (action) => dispatchedActions.push(action),
        getState: () => ({
          user: initialState,
        }),
      },
      saga,
      actions.getUser({ nick }),
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
