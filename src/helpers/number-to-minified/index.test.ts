import convertToMinifiedNumber from './index';

describe('test number to minified function', () => {
  it('test for 0 <= number <= 1000', () => {
    const randomNumber = 500;

    expect(convertToMinifiedNumber(randomNumber)).toBe('500');
  });

  it('test for  100 <= number <= 1000000', () => {
    const randomNumber = 5000;

    expect(convertToMinifiedNumber(randomNumber)).toBe('5 K');
  });

  it('test for  1000000 <= number <= 1000000000', () => {
    const randomNumber = 500000000;

    expect(convertToMinifiedNumber(randomNumber)).toBe('500 M');
  });

  it('test for  1000000000 <= number <= 1000000000000', () => {
    const randomNumber = 50000000000;

    expect(convertToMinifiedNumber(randomNumber)).toBe('50 B');
  });
});
