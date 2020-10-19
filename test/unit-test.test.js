import capitalize from '../src/capitalize'

it('capitalize when string is lowercase', () => {
  expect(capitalize('lion')).toBe('Lion');
});

it('capitalize when string is uppercase', () => {
  expect(capitalize('TURTLE')).toBe('Turtle');
});

import reverse from '../src/reverse'

it('reverse when string is lowercase', () => {
  expect(reverse('jail')).toBe('liaj');
});

it('reverse when string has uppercase letters', () => {
  expect(reverse('PriSioNEr')).toBe('rENoiSirP');
});

import calculator from '../src/calculator'

it('make a sum', () => {
  expect(calculator['+'](20, 10)).toBe(30);
})

it('make a substract', () => {
  expect(calculator['-'](900, 10)).toBe(890);
})

it('make a division', () => {
  expect(calculator['/'](10, 2)).toBe(5);
})

it('make a multiplication', () => {
  expect(calculator['*'](90, 10)).toBe(900);
})

import caesarCipher from '../src/caesarCipher'

it('returns a string ciphered', () =>{
  expect(caesarCipher('abc')).toBe('bcd')
})

it('returns uppercased words', () =>{
  expect(caesarCipher('Adf')).toBe('beg')
})