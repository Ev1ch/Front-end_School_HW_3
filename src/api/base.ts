import { ResponseError } from 'helpers';
import { TRequestArgs } from './types';
import { getUrl, getArgs } from './mappers';

const call = async <T>(args: TRequestArgs): Promise<T> => {
  const response = await fetch(getUrl(args).href, getArgs(args));
  const json = await response.json();

  if (response.ok) {
    return json as T;
  }

  throw new ResponseError(json?.error || 'Error');
};

export default call;
