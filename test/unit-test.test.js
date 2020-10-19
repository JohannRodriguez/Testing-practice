const capitalize = require('../src/capitalize');

it('capitalize when string is lowercase', () => {
  expect(capitalize('lion')).toBe('Lion');
});

it('capitalize when string is uppercase', () => {
  expect(capitalize('TURTLE')).toBe('Turtle');
});

const reverse = require('../src/reverse');

it('reverse when string is lowercase', () => {
  expect(reverse('jail')).toBe('liaj');
});

it('reverse when string has uppercase letters', () => {
  expect(reverse('PriSioNEr')).toBe('rENoiSirP');
});