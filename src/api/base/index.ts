import { ResponseError } from 'helpers';
import { TRequestArgs } from 'api/types';
import { getUrl, getArgs } from 'api/mappers';

const call = async <T>(args: TRequestArgs): Promise<T> => {
  const response = await fetch(
    getUrl({ endpoint: args.endpoint, query: args.query }).href,
    getArgs(args),
  );
  const json = await response.json();

  if (response.ok) {
    return json as T;
  }

  throw new ResponseError(json?.error || 'Request error');
};

export default call;
