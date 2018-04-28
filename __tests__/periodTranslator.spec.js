const periodTranslator = require('../src/periodTranslator.js');
test('hago bien el 31', function () {
    expect(periodTranslator('31',0)).toBe('treinta y uno');
});
test('hago bien el 1001', function () {
    expect(periodTranslator('1001',0)).toBe('mil uno');
});
test('25001', function () {
    expect(periodTranslator('25001',0)).toBe('veinticinco mil uno');
});

test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
    expect(periodTranslator('1001',0)).not.toBe('uno mil uno');
});