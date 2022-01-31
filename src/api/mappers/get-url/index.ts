import { API_ROOT } from 'common';
import { IQuery } from 'api/types';

const getUrl = ({
  endpoint,
  query,
}: {
  endpoint: string;
  query?: IQuery;
}): URL => {
  const url = new URL(endpoint, API_ROOT);

  if (query) {
    Object.keys(query).forEach((key) => {
      url.searchParams.append(key, String(query[key]));
    });
  }

  return url;
};

export default getUrl;
