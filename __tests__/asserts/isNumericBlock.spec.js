const isNumericBlock = require('../../src/asserts/isNumericBlock');

const n2h = require('../../src/asserts/isNumericBlock');
describe('isNumericBlock garantiza que un bloque únicamente está compuesto por guarismos', function () {
   test('9283479823478923748978239479238 es valido', function () {
      expect(isNumericBlock('9283479823478923748978239479238')).toBe(true);
   });
    test('92834798234789a23748978239479238 es invalido', function () {
        expect(isNumericBlock('92834798234789a23748978239479238')).toBe(false);
    });
    test('hola8 es invalido', function () {
        expect(isNumericBlock('hola8')).toBe(false);
    });
});