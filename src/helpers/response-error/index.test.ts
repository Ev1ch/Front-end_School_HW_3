import ResponseError from './index';

describe('test respose error class', () => {
  it('test if converting to string works', () => {
    const message = '%message%';

    const responseError = new ResponseError(message);

    expect(responseError.toString()).toBe(message);
  });
});
