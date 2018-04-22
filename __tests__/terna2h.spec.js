/* tenemos que resolver un número de 3 dígitos desde el 000 al 999 de número a letra.

 745 = "setecientos cuarenta y cinco"
 27 = "Veintisiete"
 del 16 al 19 , lo hace bien.
 Si el primer dígito es un 1 , entonces no tengo que decir "uno mil"

*/

const terna2h = require('../src/terna2h');

test('si le meto 745', function () {
   expect(terna2h(745)).toBe('setecientos cuarenta y cinco');
});
test('si le meto 27', function () {
    expect(terna2h(27)).toBe('veintisiete');
});

test('del 16 al 19 va bien', function () {
    expect(terna2h(16)).toBe('dieciseis');
    expect(terna2h(17)).toBe('diecisiete');
    expect(terna2h(18)).toBe('dieciocho');
    expect(terna2h(19)).toBe('diecinueve');
});