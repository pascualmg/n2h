/**
 * @type {n2h}
 */
const n2h = require('../src/n2h');

test('si le meto enorme como el 31415926535897932384626433832795 lo hace bien', function () {
    expect(n2h('31415926535897932384626433832795')).toEqual('treinta y un quintillones ' +
        'cuatrocientos quince mil novecientos veintiséis cuatrillones ' +
        'quinientos treinta y cinco mil ochocientos noventa y siete trillones ' +
        'novecientos treinta y dos mil trescientos ochenta y cuatro billones ' +
        'seiscientos veintiséis mil cuatrocientos treinta y tres millones ' +
        'ochocientos treinta y dos mil setecientos noventa y cinco');
});
test('si le meto grandecico como el 123123123 lo hace bien', function () {
    expect(n2h('123123123')).toBe('ciento veintitrés millones ciento veintitrés mil ciento veintitrés');
});
test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
  expect(n2h('1001')).not.toBe('uno mil uno');
});

test('hago bien el 1001', function () {
    expect(n2h('1001')).toBe('mil uno');
});



test('25001', function () {
    expect(n2h('25001')).toBe('veinticinco mil uno');
});