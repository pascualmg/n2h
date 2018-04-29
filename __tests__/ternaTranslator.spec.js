/* tenemos que resolver un número de 3 dígitos desde el 000 al 999 de número a letra.

 745 = "setecientos cuarenta y cinco"
 27 = "Veintisiete"
 del 16 al 19 , lo hace bien.

*/

const ternaTranslator = require('../src/ternaTranslator.js');

test('si le meto 745', function () {
   expect(ternaTranslator('745')).toBe('setecientos cuarenta y cinco');
});
test('si le meto 456', function () {
    expect(ternaTranslator('456')).toBe('cuatrocientos cincuenta y seis');
});
test('si le meto 27', function () {
    expect(ternaTranslator('27')).toBe('veintisiete');
});

test('del 1 al 99 va bien', function () {
    for (let i = 1;i<=99;i++){
        expect(ternaTranslator(i.toString())).toBe(tupla2h(i));
    }
});
test('1', function () {
    expect(ternaTranslator("1")).toBe('un');
});
test('42', function () {
    expect(ternaTranslator("42")).toBe('cuarenta y dos');
});

test('31', function () {
    expect(ternaTranslator("31")).toBe('treinta y un');
});

test('41', function () {
    expect(ternaTranslator("41")).toBe('cuarenta y un');
});

test('100', function () {
    expect(ternaTranslator("100")).toBe('cien');
});


//Este array viene directo de la wikipedia , así que lo podemos dar como cierto
// y se usa para test solamente.
//NO modificar esta función bajo ningún concepto excepto que las reglas de la
// lengua cambien , algo que no va a pasar , jamás a menos que cambies de idioma.
function tupla2h(i) {
    const tuplasRaw = [
        "cero",
        "un",
        "dos",
        "tres",
        "cuatro",
        "cinco",
        "seis",
        "siete",
        "ocho",
        "nueve",
        "diez",
        "once",
        "doce",
        "trece",
        "catorce",
        "quince",
        "dieciséis",
        "diecisiete",
        "dieciocho",
        "diecinueve",
        "veinte",
        "veintiuno", //o veintiuna
        "veintidós",
        "veintitrés",
        "veinticuatro",
        "veinticinco",
        "veintiséis",
        "veintisiete",
        "veintiocho",
        "veintinueve",
        "treinta",
        "treinta y un",
        "treinta y dos",
        "treinta y tres",
        "treinta y cuatro",
        "treinta y cinco",
        "treinta y seis",
        "treinta y siete",
        "treinta y ocho",
        "treinta y nueve",
        "cuarenta",
        "cuarenta y un",
        "cuarenta y dos",
        "cuarenta y tres",
        "cuarenta y cuatro",
        "cuarenta y cinco",
        "cuarenta y seis",
        "cuarenta y siete",
        "cuarenta y ocho",
        "cuarenta y nueve",
        "cincuenta",
        "cincuenta y un",// cincuenta y una	Delante de un sustantivo: «cincuenta y un» o «cincuenta y una».
        "cincuenta y dos",
        "cincuenta y tres",
        "cincuenta y cuatro",
        "cincuenta y cinco",
        "cincuenta y seis",
        "cincuenta y siete",
        "cincuenta y ocho",
        "cincuenta y nueve",
        "sesenta",
        "sesenta y un",
        "sesenta y dos",
        "sesenta y tres",
        "sesenta y cuatro",
        "sesenta y cinco",
        "sesenta y seis",
        "sesenta y siete",
        "sesenta y ocho",
        "sesenta y nueve",
        "setenta",
        "setenta y un",
        "setenta y dos",
        "setenta y tres",
        "setenta y cuatro",
        "setenta y cinco",
        "setenta y seis",
        "setenta y siete",
        "setenta y ocho",
        "setenta y nueve",
        "ochenta",
        "ochenta y un", //a
        "ochenta y dos",
        "ochenta y tres",
        "ochenta y cuatro",
        "ochenta y cinco",
        "ochenta y seis",
        "ochenta y siete",
        "ochenta y ocho",
        "ochenta y nueve",
        "noventa",
        "noventa y un",// noventa y una	Delante de un sustantivo: «noventa y un» o «noventa y una».
        "noventa y dos",
        "noventa y tres",
        "noventa y cuatro",
        "noventa y cinco",
        "noventa y seis",
        "noventa y siete",
        "noventa y ocho",
        "noventa y nueve",
        "cien"
    ];
    return tuplasRaw[i]
}