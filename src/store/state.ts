import { ITrendingState } from './trending/state';
import { IUserState } from './user/state';

interface IRootState {
  trending: ITrendingState;
  user: IUserState;
}

export default IRootState;
