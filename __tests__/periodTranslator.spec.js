const periodTranslator = require('../src/periodTranslator.js');

test('hago bien el 1001', function () {
    expect(periodTranslator('1001')).toBe('mil uno');
});
test('25001', function () {
    expect(periodTranslator('25001')).toBe('veinticinco mil uno');
});

test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
    expect(periodTranslator('1001')).not.toBe('uno mil uno');
});