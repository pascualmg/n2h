const fillString = require('./utils/fillString.js');
const terna2h = require('./terna2h.js');
const weightPeriodTranslator = require('./locale/es/weightPeriodTranslator.js');

/**
 * Traduce un block a lenguaje humano en cualquier idioma conocido o inventado.
 *
 * un block , es una string que contiene caracteres numéricos únicamente.//todo:asserts y test.
* vg->[000101] es un block que se compone de 2 ternas [{terna2}{terna1}]
 * @param block
 * @returns {string}
 */
module.exports = function periodTranslator(block, weight) {
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

    //si el block(periodo) viene vacio no hacemos nada.
    const isEmptyBlock = (terna2 === "000" && terna1 === "000");
    if(isEmptyBlock){
        return resultStr;
    }

    let lastDigitOfTerna1 = terna1.slice(-1);
    let imTheFirstPeriod = (weight === 0);

    if(imTheFirstPeriod && lastDigitOfTerna1 === "1" ){
        translatedTerna1 = translatedTerna1.concat("o");
    }
    if(!imTheFirstPeriod && terna1 === "000" ){
        translatedTerna1 = "";
    }
    if (terna2 === '000'){
        isActiveTerna2 = false;
        isActiveMillar = false;
    }
    //1001 exception
    if (terna2 === '001'){
        isActiveMillar = true;
        isActiveTerna2 = false;
    }

    //Si el weightSeparator es plural o no nene, ¿un nonillón o dos nonillones?
    const firstDigitOfTerna2 = terna2.slice(0,1);

    let isPlural = true;
    if (firstDigitOfTerna2 === "1") {
        isPlural = false;
    }


    //todo: construccion de cadena a retornar.
    if (isActiveTerna2){
        resultStr = resultStr.concat(translatedTerna2);
    }
    if(isActiveMillar){
        resultStr = resultStr
            .concat(millarSeparator);
    }

    resultStr = resultStr
        .concat(translatedTerna1)
        .concat(!imTheFirstPeriod?" ":"")
        .concat(!imTheFirstPeriod?weightPeriodTranslator(weight,isPlural):"")
        .concat(!imTheFirstPeriod?" ":"");
   return resultStr;

    // return translatedTerna2 + millarSeparator + translatedTerna1;
};

