import capitalize from '../src/capitalize';

import reverse from '../src/reverse';

import calculator from '../src/calculator';

import rot13 from '../src/caesarCipher';

import arrayAnalysis from '../src/arrayAnalysis';

it('capitalize when string is lowercase', () => {
  expect(capitalize('lion')).toBe('Lion');
});

it('capitalize when string is uppercase', () => {
  expect(capitalize('TURTLE')).toBe('Turtle');
});

it('reverse when string is lowercase', () => {
  expect(reverse('jail')).toBe('liaj');
});

it('reverse when string has uppercase letters', () => {
  expect(reverse('PriSioNEr')).toBe('rENoiSirP');
});

it('make a sum', () => {
  expect(calculator['+'](20, 10)).toBe(30);
});

it('make a substract', () => {
  expect(calculator['-'](900, 10)).toBe(890);
});

it('make a division', () => {
  expect(calculator['/'](10, 2)).toBe(5);
});

it('make a multiplication', () => {
  expect(calculator['*'](90, 10)).toBe(900);
});

it('returns a string ciphered', () => {
  expect(rot13('abc')).toBe('bcd');
});

it('returns uppercased words', () => {
  expect(rot13('Adf')).toBe('beg');
});

it('returns uppercased words', () => {
  expect(rot13('Azf')).toBe('bag');
});

it('returns and object with data of a sorted array', () => {
  expect(arrayAnalysis([2, 4, 6, 8, 10, 12])).toEqual({
    average: 7, length: 6, max: 12, min: 2,
  });
});

it('returns and object with data of an unsorted array', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, length: 6, max: 8, min: 1,
  });
});