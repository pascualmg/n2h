const fillString = require('./utils/fillString.js');
const terna2h = require('./ternaTranslator.js');
const weightPeriodTranslator = require('./locale/es/weightPeriodTranslator.js');
const hasOnlyChar = require('./asserts/hasOnlyChar');
/**
 * Traduce un block a lenguaje humano en cualquier idioma conocido o inventado.
 *
 * un block , es una string que contiene caracteres numéricos únicamente.//todo:asserts y test.
 * vg->[000101] es un block que se compone de 2 ternas [{terna2}{terna1}]
 * @param block
 * @returns {string}
 */
const periodTranslator = function periodTranslator(block, weight) {
    const millarSeparator = 'mil';


    function normalizeBlock() {
        //assert is not bigger than a period
        if (block.length > 6) {
            throw 'bloque demasiado largo';
        }
        //normalize AVOID bugs better than fix them.
        if (block.length < 6) {
            let fixedLenghtBlock = fillString(block, "0", 6);
            block = fixedLenghtBlock;
        }
    }

    normalizeBlock();//todo:extract in Utils and use in main ...
    let isActiveTerna2 = true;
    let isActiveMillar = true;

    let imTheFirstPeriod = (weight === 0);

    let resultStr = "";
    let terna1 = block.slice(-3);
    let terna2 = block.slice(0, 3);

    let translatedTerna1 = "";
    let translatedTerna2 = "";


    const lastDigitOfTerna1 = terna1.slice(-1);

    //not [000xxx] fix cero mil. y el segundo el 1001

    translatedTerna2 = terna2h(terna2);
    translatedTerna1 = terna2h(terna1);

    function isEmpty(block) {
        return hasOnlyChar("0", block);
    }

    if (imTheFirstPeriod && isEmpty(block)) {
        return translatedTerna1;
    }
    if (isEmpty(block)) {
        return resultStr;
    }


    if (imTheFirstPeriod && lastDigitOfTerna1 === "1") {
        translatedTerna1 = translatedTerna1.concat("o");
    }

    if (isEmpty(terna2)) {
        isActiveTerna2 = false;
        isActiveMillar = false;
    }
    if (hasOnlyChar("0", terna1)) {
        translatedTerna1 = "";
    }
    //1001 exception
    if (terna2 === '001') {
        isActiveMillar = true;
        isActiveTerna2 = false;
    }

    //Si el weightSeparator es plural o no nene, ¿un nonillón o dos nonillones?
    const firstDigitOfBlock = block.slice(-1);

    //plurals rule.
    let isPluralWeight = true;
    if (terna1=== "001" && isEmpty(terna2)) {
        isPluralWeight = false;
    }

    //SrringBuilding... translatedTerna2 + millarSeparator + translatedTerna1;
    if (isActiveTerna2) {
        resultStr = resultStr
            .concat(translatedTerna2)
            .concat(" ")
        ;
    }
    if (isActiveMillar) {
        resultStr = resultStr
            .concat(millarSeparator)
            .concat(!isEmpty(terna1)?" ":"")
        ;
    }

    resultStr = resultStr
        .concat(translatedTerna1)
        .concat(!imTheFirstPeriod ? " " : "")
        .concat(!imTheFirstPeriod ? weightPeriodTranslator(weight, isPluralWeight)+" " : "")
    return resultStr;
};

periodTranslator.numericInexistenceTranslation = "cero";
module.exports = periodTranslator;
