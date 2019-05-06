const isPalindromes = require('./hw4');

describe('hw4', () => {
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });
  it('should return correct answer when str = apple', () => {
    expect(isPalindromes('apple')).toBe(false);
  });
  it('should return correct answer when str = aaaaa', () => {
    expect(isPalindromes('aaaaa')).toBe(true);
  });
  it('should return correct answer when str = applppa', () => {
    expect(isPalindromes('applppa')).toBe(true);
  });
  it('should return correct answer when str = ""', () => {
    expect(isPalindromes('')).toBe(true);
  });
  it('should return correct answer when str = !!!???', () => {
    expect(isPalindromes('!!!???')).toBe(false);
  });
  it('should return correct answer when str = !!!???!!!', () => {
    expect(isPalindromes('!!!???!!!')).toBe(true);
  });
  it('should return correct answer when str = !', () => {
    expect(isPalindromes('!')).toBe(true);
  });
  it('should return correct answer when str = [56789]', () => {
    expect(isPalindromes('[56789]')).toBe(false);
  });
  it('should return correct answer when str = [55655]', () => {
    expect(isPalindromes('[55655]')).toBe(false);
  });
  it('should return correct answer when str = [55655[', () => {
    expect(isPalindromes('[55655[')).toBe(true);
  });
});
