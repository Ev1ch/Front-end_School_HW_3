import { API_ROOT } from 'common';
import getUrl from './index';

describe('testing url mapper from api', () => {
  it('check if base url creating works', () => {
    const endpoint = '%endpoint%';

    const url = getUrl({ endpoint }).href;

    expect(url).toBe(`${API_ROOT}/${endpoint}`);
  });

  it('check if  url creating works with simple query', () => {
    const endpoint = '%endpoint%';
    const query = {
      query: 'value',
    };

    const url = getUrl({ endpoint, query }).href;

    expect(url).toBe(`${API_ROOT}/${endpoint}?query=value`);
  });

  it('check if  url creating works with hard query', () => {
    const endpoint = '%endpoint%';
    const query = {
      firstQuery: 'value',
      secondQuery: 'value',
      thirdQuery: '',
    };

    const url = getUrl({ endpoint, query }).href;

    expect(url).toBe(
      `${API_ROOT}/${endpoint}?firstQuery=value&secondQuery=value&thirdQuery=`,
    );
  });
});
