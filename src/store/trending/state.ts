import { ITikTuk } from 'domain/tiktuk';

export interface ITrendingState {
  items: ITikTuk[] | null;
  isLoading: boolean;
  isError: boolean;
  options: {
    limit: number;
    pageSize: number;
    pageNumber: number;
  };
}

export const initialState: ITrendingState = {
  items: null,
  isLoading: false,
  isError: false,
  options: {
    limit: 30,
    pageSize: 4,
    pageNumber: 1,
  },
};

export default initialState;
