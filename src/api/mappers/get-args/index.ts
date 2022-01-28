import { HttpMethods } from 'common';
import { TRequestArgs, THeader, TBody, IRequestInit } from 'api/types';

const getArgs = (args: TRequestArgs): IRequestInit => {
  const headers: THeader = {};
  let body: TBody | null = null;
  const method = args.method || HttpMethods.GET;

  headers['X-RapidAPI-Key'] = process.env.REACT_APP_API_KEY as string;

  if (method !== HttpMethods.GET && args?.body) {
    if (args.body instanceof FormData) {
      body = args.body;
    } else {
      body = JSON.stringify(args.body);
      headers['Content-Type'] = 'application/json';
    }
  }

  headers.Accept = 'application/json';

  return {
    method,
    headers,
    ...(body ? { body } : {}),
  } as IRequestInit;
};

export default getArgs;
