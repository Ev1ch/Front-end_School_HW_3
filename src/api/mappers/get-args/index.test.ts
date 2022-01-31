import { HttpMethods } from 'common';
import getArgs from './index';

describe('testing url mapper from api', () => {
  const endpoint = '%endpoint%';

  it('check if base args creating works', () => {
    const method = HttpMethods.GET;
    const args = getArgs({ endpoint, method });

    expect(args).toEqual({
      method,
      headers: {
        Accept: 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      },
    });
  });

  it('check if object body creating works', () => {
    const method = HttpMethods.POST;
    const body = {
      key: 'value',
    };
    const args = getArgs({ endpoint, method, body });

    expect(args).toEqual({
      method,
      headers: {
        Accept: 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  });

  it('check if object body creating works', () => {
    const method = HttpMethods.POST;
    const body = new FormData();
    const args = getArgs({ endpoint, method, body });

    expect(args).toEqual({
      method,
      headers: {
        Accept: 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      },
      body,
    });
  });
});
