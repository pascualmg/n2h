const fillString = require('./utils/fillString.js');
const terna2h = require('./terna2h.js');
/**
 * Traduce un block a lenguaje humano .
 * un block , es una string que contiene caracteres numéricos únicamente.//todo:asserts y test.
 * un block , es una string que tiene un tamaño fijo de 6 caracteres.
 * vg->[000101] es un block que se compone de 2 ternas [{terna2}{terna1}]
 * @param block
 * @returns {string}
 */
module.exports = function block2h(block) {
    const millarSeparator = ' mil ';
    let isActiveTerna2 = true;
    let isActiveMillar = true;
    //assert is not bigger than a period
    if (block.length > 6) {
        console.log('Error critico , a block2h le está llegando un block de más de 6 caracteres!! omg k cojones estás tocando');
        console.error(block);
    }
    //normalize AVOID bugs better than fix them.
    if (block.length < 6) {
        let fixedLenghtBlock = fillString(block, '0', 6);
        block = fixedLenghtBlock;
    }

    let resultStr = "";
    let terna1 = "";
    let terna2 = "";

    let translatedTerna1 = "";
    let translatedTerna2 = "";

    terna1 = block.slice(-3);
    terna2 = block.slice(0, 3);

    //not [000xxx] fix cero mil. y el segundo el 1001

    translatedTerna2 = terna2h(terna2);
    translatedTerna1 = terna2h(terna1);


    if (terna2 === '000'){
        isActiveTerna2 = false;
        isActiveMillar = false;
    }
    //1001 exception
    if (terna2 === '001'){
        isActiveMillar = true;
        isActiveTerna2 = false;
    }

    //todo:refactor de esto a una linea en el return con los ()? , no se por que no van.
    if (isActiveTerna2){
        resultStr = resultStr.concat(translatedTerna2);
    }
    if(isActiveMillar){
        resultStr = resultStr.concat(millarSeparator);
    }

    return resultStr.concat(translatedTerna1).trim();
    // return translatedTerna2 + millarSeparator + translatedTerna1;
}

