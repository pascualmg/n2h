/* tenemos que resolver un número de 3 dígitos desde el 000 al 999 de número a letra.

 745 = "setecientos cuarenta y cinco"
 27 = "Veintisiete"
 del 16 al 19 , lo hace bien.

*/

const terna2h = require('../src/terna2h');

test('si le meto 745', function () {
   expect(terna2h('745')).toBe('setecientos cuarenta y cinco');
});
test('si le meto 456', function () {
    expect(terna2h('456')).toBe('cuatrocientos cincuenta y seis');
});
test('si le meto 27', function () {
    expect(terna2h('27')).toBe('veintisiete');
});

test('del 0 al 99 va bien', function () {
    for (let i = 0;i<=99;i++){
        expect(terna2h(i.toString())).toBe(tupla2h(i));
    }
});

//Este array viene directo de la wikipedia , así que lo podemos dar como cierto.
function tupla2h(i) {
    const tuplasRaw = [
        "cero",
        "uno",
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
        "treinta y uno",
        "treinta y dos",
        "treinta y tres",
        "treinta y cuatro",
        "treinta y cinco",
        "treinta y seis",
        "treinta y siete",
        "treinta y ocho",
        "treinta y nueve",
        "cuarenta",
        "cuarenta y uno",
        "cuarenta y dos",
        "cuarenta y tres",
        "cuarenta y cuatro",
        "cuarenta y cinco",
        "cuarenta y seis",
        "cuarenta y siete",
        "cuarenta y ocho",
        "cuarenta y nueve",
        "cincuenta",
        "cincuenta y uno",// cincuenta y una	Delante de un sustantivo: «cincuenta y un» o «cincuenta y una».
        "cincuenta y dos",
        "cincuenta y tres",
        "cincuenta y cuatro",
        "cincuenta y cinco",
        "cincuenta y seis",
        "cincuenta y siete",
        "cincuenta y ocho",
        "cincuenta y nueve",
        "sesenta",
        "sesenta y uno",
        "sesenta y dos",
        "sesenta y tres",
        "sesenta y cuatro",
        "sesenta y cinco",
        "sesenta y seis",
        "sesenta y siete",
        "sesenta y ocho",
        "sesenta y nueve",
        "setenta",
        "setenta y uno",
        "setenta y dos",
        "setenta y tres",
        "setenta y cuatro",
        "setenta y cinco",
        "setenta y seis",
        "setenta y siete",
        "setenta y ocho",
        "setenta y nueve",
        "ochenta",
        "ochenta y uno", //a
        "ochenta y dos",
        "ochenta y tres",
        "ochenta y cuatro",
        "ochenta y cinco",
        "ochenta y seis",
        "ochenta y siete",
        "ochenta y ocho",
        "ochenta y nueve",
        "noventa",
        "noventa y uno",// noventa y una	Delante de un sustantivo: «noventa y un» o «noventa y una».
        "noventa y dos",
        "noventa y tres",
        "noventa y cuatro",
        "noventa y cinco",
        "noventa y seis",
        "noventa y siete",
        "noventa y ocho",
        "noventa y nueve",
    ];
    return tuplasRaw[i]
}