import { IFeed } from 'domain/feed';
import { IUser } from 'domain/user';
import { UserRepository } from 'repositories';

export async function getUser({ nick }: { nick: string }): Promise<IUser> {
  const user = await UserRepository.getUser({ nick });
  return user;
}

export async function getUserFeed({
  nick,
  limit,
}: {
  nick: string;
  limit: number;
}): Promise<IFeed> {
  const userFeed = await UserRepository.getUserFeed({ nick, limit });
  return userFeed;
}
