import { IUserFeedState, IUserInformationState } from './types';

export const GET_USER = 'USER:GET_USER';
export const SET_USER = 'USER:SET_USER';
export const SET_LOADING = 'USER:SET_LOADING';
export const SET_ERROR = 'USER:SET_ERROR';

export interface IGetUserArgs {
  nick: string;
}

export interface ISetUserArgs {
  information: Partial<IUserInformationState>;
  feed: Partial<IUserFeedState>;
}

export interface ISetLoadingArgs {
  isLoading: boolean;
}

export interface ISetErrorArgs {
  isError: boolean;
}
