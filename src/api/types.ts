import { HttpMethods } from 'common';

export type TBody = unknown;

export type THeader = Headers | string[][] | Record<string, string> | undefined;

export type IQuery = Record<string, string | number>;

export type TRequestArgs =
  | {
      endpoint: string;
      method: HttpMethods.GET;
      query?: IQuery;
      body?: never;
    }
  | {
      endpoint: string;
      method: Exclude<HttpMethods, HttpMethods.GET>;
      query?: IQuery;
      body?: TBody;
    };

export interface IRequestInit {
  method: string;
  headers: THeader;
  body?: FormData | string;
}
