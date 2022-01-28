import { HttpMethods } from 'common';
import call from './index';
import '@testing-library/jest-dom/extend-expect';

const getMockedFetch = (args: Record<string, unknown>): jest.Mock =>
  jest.fn(() => Promise.resolve(args));

describe('testing base api call', () => {
  const endpoint = '%endpoint%';

  it('check if json is returning ', async () => {
    global.fetch = getMockedFetch({
      ok: true,
      json: () => Promise.resolve({ test: 'test' }),
    });

    const method = HttpMethods.GET;

    expect(await call({ method, endpoint })).toEqual({
      test: 'test',
    });
  });

  it('check if error is throwing if something went wrong ', async () => {
    global.fetch = getMockedFetch({
      ok: false,
      json: () => Promise.resolve({ test: 'test' }),
    });

    const method = HttpMethods.GET;

    await expect(call({ method, endpoint })).rejects.toThrowError(
      /Request error/i,
    );
  });
});
