/**
 * https://es.wikipedia.org/wiki/Anexo:Nombres_de_los_n%C3%BAmeros_en_espa%C3%B1ol
 * Una terna es un chunk de 3 caracteres numéricos, formado por una tupla y las centenas.
 * no es superior a novecientos noventa y nueve 999 y no es inferior a 000.
 * @param terna
 */
function terna2h(terna) {
    let HumanString = "";

    if (isTupla(terna)){
        return tupla2h(Number(terna));
    }
    const pesoIndex = Number(terna.substring(0,1));
    const tuplaIndex = Number(terna.substring(1,3));

    const HumanCentenas = pesoCentenas(pesoIndex);
    const HumanTupla = tupla2h(tuplaIndex);

    if (pesoIndex < 1) {
       HumanString = HumanTupla;
    }

    if (pesoIndex >= 1) {
        HumanString = HumanCentenas + ' ' + HumanTupla;
    }

    return HumanString;
}
function isTupla(terna){
    return terna.length < 3;
}
function tupla2h(index) {
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
    return tuplasRaw[index]
}
function pesoCentenas(index){
    let centenas = "";
   const pesoCentenas = [
       "",//0
       "ciento",
       "doscientos",
       "trescientos",
       "cuatrocientos",
       "quinientos",
       "seiscientos",
       "setecientos",
       "ochocientos",
       "novecientos"
   ];
   centenas =  pesoCentenas[index];
   return centenas;
}
module.exports = terna2h;