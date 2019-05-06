const isPrime = require('./hw3');

describe('hw3', () => {
  it('should return correct answer when n = 1', () => {
    expect(isPrime(1)).toBe(false);
  });
  it('should return correct answer when n = 100000', () => {
    expect(isPrime(100000)).toBe(false);
  });
  it('should return correct answer when n = 2', () => {
    expect(isPrime(2)).toBe(true);
  });
  it('should return correct answer when n = 3', () => {
    expect(isPrime(3)).toBe(true);
  });
  it('should return correct answer when n = 10', () => {
    expect(isPrime(10)).toBe(false);
  });
  it('should return correct answer when n = 37', () => {
    expect(isPrime(37)).toBe(true);
  });
  it('should return correct answer when n = 38', () => {
    expect(isPrime(38)).toBe(false);
  });
  it('should return correct answer when n = 3571', () => {
    expect(isPrime(3571)).toBe(true);
  });
  it('should return correct answer when n = 27751', () => {
    expect(isPrime(27751)).toBe(true);
  });
});
