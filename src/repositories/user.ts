// import Api from 'api';
// import { ApiRoutes } from 'common';
import { IUser } from 'domain/user';
import { IFeed } from 'domain/feed';
import USER from 'mocks/user';
import USER_FEED from 'mocks/user-feed';

// export async function getUser({ nick }: { nick: string }): Promise<IUser> {
//   const response = await Api.get<IUser>({
//     endpoint: ApiRoutes.USER.INFO(nick),
//   });

//   return response;
// }

// export async function getUserFeed({
//   limit,
//   nick,
// }: {
//   limit: number;
//   nick: string;
// }): Promise<IFeed> {
//   const response = await Api.get<IFeed>({
//     endpoint: ApiRoutes.USER.FEED(nick),
//     query: { limit },
//   });

//   return response;
// }

export const getUser = ({ nick }: { nick: string }): Promise<IUser> =>
  new Promise((resolve) => {
    console.log('Nick', nick);

    setTimeout(() => resolve(USER), 2000);
  });

export const getUserFeed = ({
  nick,
  limit,
}: {
  nick: string;
  limit: number;
}): Promise<IFeed> =>
  new Promise((resolve) => {
    console.log('Nick', nick, limit);

    setTimeout(() => resolve(USER_FEED), 2000);
  });
