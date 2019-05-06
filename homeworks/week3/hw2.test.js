const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  it('should return correct answer when str = Nick', () => {
    expect(alphaSwap('Nick')).toBe('nICK');
  });
  it('should return correct answer when str = ,hEllO123', () => {
    expect(alphaSwap(',hEllO123')).toBe(',HeLLo123');
  });
  it('should return correct answer when str =""', () => {
    expect(alphaSwap('""')).toBe('""');
  });
  it('should return correct answer when str =!!!', () => {
    expect(alphaSwap('!!!')).toBe('!!!');
  });
  it('should return correct answer when str =1234567', () => {
    expect(alphaSwap('1234567')).toBe('1234567');
  });
  it('should return correct answer when str =ABCDEfghijk', () => {
    expect(alphaSwap('ABCDEfghijk')).toBe('abcdeFGHIJK');
  });
  it('should return correct answer when str =AB-cd=eF', () => {
    expect(alphaSwap('AB-cd=eF')).toBe('ab-CD=Ef');
  });
});
