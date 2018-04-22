/**
 * Si le meto un numero enorme lo hace bien.
 *
 */

/**
 * @type {n2h}
 */
const n2h = require('../src/n2h');

test('si le meto enorme como el 13456745 lo hace bien', function () {
    expect(n2h(13456745)).toBe('trece millones cuatrocientos cincuenta y siete mil setecientos cuarenta y cinco');
});

test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
  expect(n2h(1001)).not.toBe('uno mil uno');
});

test('hago bien el 1001', function () {
    expect(n2h(1001)).toBe('mil uno');
});