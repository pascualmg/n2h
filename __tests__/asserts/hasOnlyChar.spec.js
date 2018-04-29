const hasOnlyChar = require('../../src/asserts/hasOnlyChar');
const zeroChar = "0";

describe('retorna bool dependiendo de si la cadena esta formada solamente por guarismos 0', function () {
    describe('si solo tiene 0s sea del tamaño que sea devuelve true', function () {
        test('0', function () {
            expect(hasOnlyChar(zeroChar, '0')).toBe(true);
        });
        test('00', function () {
            expect(hasOnlyChar(zeroChar, '00')).toBe(true);
        });
        test('00000000', function () {
            expect(hasOnlyChar(zeroChar, '00000000')).toBe(true);
        });
        test('0000000000000000000', function () {
            expect(hasOnlyChar(zeroChar, '0000000000000000000')).toBe(true);
        });
        test('aaaaaa', function () {
            expect(hasOnlyChar('a', 'aaaaaa')).toBe(true);
        });
    });
    describe('si el block contiene cualquier otra cosa que no sea cero, retorna false', function () {
        test('01', function () {
            expect(hasOnlyChar(zeroChar, '01')).toBe(false);
        });
        test('010', function () {
            expect(hasOnlyChar(zeroChar, '010')).toBe(false);
        });
        test('010000000', function () {
            expect(hasOnlyChar(zeroChar, '010000000')).toBe(false);
        });
        test('00010000000000000000', function () {
            expect(hasOnlyChar(zeroChar, '00010000000000000000')).toBe(false);
        });
         test('aaaaaaaaaaaaaaaa', function () {
            expect(hasOnlyChar('a', 'aaaaaaaaaaaaak')).toBe(false);
        });

    });
});
