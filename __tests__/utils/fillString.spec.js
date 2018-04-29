/**
 * Se necesita una func que garantice el tamaño  de un string además de con que caracteres se rellean los espacios faltantes.
 **/
const fillString = require('../../src/utils/fillString.js');

describe('fillString', function () {
   test('si la cadena no tiene la longitud indicada , la añado rellenando con el char indicado', function () {
       const block = '1001';
       const expected = '001001';

       expect(fillString(block, "0", 6)).toBe(expected);
   })
    test('si la cadena es igual o mas de larga que la longitud indicada , retorna la misma cadena', function () {
        const block = '234234';
        expect(fillString(block)).toBe(block);
        expect(fillString(block.concat('42'))).toBe(block.concat('42'));
    })
});

