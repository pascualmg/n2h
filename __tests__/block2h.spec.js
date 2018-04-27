const block2h = require('../src/block2h.js');

test('hago bien el 1001', function () {
    expect(block2h('1001')).toBe('mil uno');
});
test('25001', function () {
    expect(block2h('25001')).toBe('veinticinco mil uno');
});

test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
    expect(block2h('1001')).not.toBe('uno mil uno');
});