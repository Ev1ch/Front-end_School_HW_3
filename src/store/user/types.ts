import { IFeedTikTuk } from 'domain/feed';
import { IUser } from 'domain/user';

export interface IUserInformationState {
  item: IUser | null;
}

export interface IUserFeedState {
  items: IFeedTikTuk[] | null;
  options: {
    limit: number;
    pageSize: number;
    pageNumber: number;
  };
}
