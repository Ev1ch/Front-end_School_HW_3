import { HttpMethods } from 'common';
import { TRequestArgs } from './types';
import call from './base';

export const get = async <T>(
  args: Omit<TRequestArgs, 'method' | 'body'>,
): Promise<T> => call<T>({ ...args, method: HttpMethods.GET });

export const post = async <T>(args: Omit<TRequestArgs, 'method'>): Promise<T> =>
  call<T>({ ...args, method: HttpMethods.POST });
