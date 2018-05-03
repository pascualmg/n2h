/**
 * @type {n2h}
 */
const n2h = require('../src/n2h');

//https://wikimedia.org/api/rest_v1/media/math/render/svg/6e2fb44a6df602e5c9522edf731d3889cd6c208b
describe('n2h works fine with numberStrs with more than one period', function () {
    test('31415926535897932384626433832791 works fine', function () {
        expect(n2h('31415926535897932384626433832791')).toEqual('treinta y un quintillones ' +
            'cuatrocientos quince mil novecientos veintiséis cuatrillones ' +
            'quinientos treinta y cinco mil ochocientos noventa y siete trillones ' +
            'novecientos treinta y dos mil trescientos ochenta y cuatro billones ' +
            'seiscientos veintiséis mil cuatrocientos treinta y tres millones ' +
            'ochocientos treinta y dos mil setecientos noventa y uno');
    });
    test('si le meto grandecico como el 123123123 lo hace bien', function () {
        expect(n2h('123123123')).toBe('ciento veintitrés millones ciento veintitrés mil ciento veintitrés');
    });
});

//explicity duplicated in periodTranslator.spec.js , if fails see test there.
describe('n2h works fine with numbers withe less than one period', function () {
    test('Si el primer dígito es un 1 en un número de más de una terna, entonces no tengo que decir "uno mil"', function () {
        expect(n2h('1001')).not.toBe('uno mil uno');
    });

    test('hago bien el 1001', function () {
        expect(n2h('1001')).toBe('mil uno');
    });
    test('hago bien el 1000', function () {
        expect(n2h('1000')).toBe('mil');
    });
     test('hago bien el 0', function () {
        expect(n2h('0')).toBe('cero');
    });
    test('hago bien el 1', function () {
        expect(n2h('1')).toBe('uno');
    });
    test('25001', function () {
        expect(n2h('25001')).toBe('veinticinco mil uno');
    });
    test('hago bien el 31', function () {
        expect(n2h('31')).toBe('treinta y uno');
    });

    test('cien mil', function () {
        expect(n2h('100000')).toBe('cien mil');
    });
  test('trescientos cinco', function () {
    expect(n2h('305')).toBe('trescientos cinco');
  });
    test('diez mil', function () {
        expect(n2h('10000')).toBe('diez mil');
    });
    test('un millón un billón', function () {
        expect(n2h('1000001000000')).toBe('un billón un millón');
    });
     test('hago bien un nonillón', function () {
        expect(n2h('1000000000000000000000000000000000000000000000000000000')).toBe('un nonillón');
    });
});
