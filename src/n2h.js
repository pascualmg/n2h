const terna2h = require('./terna2h.js');
const fillString = require('./utils/fillString.js');
const block2h = require('./block2h.js');

function n2h(numberStr) {
    return h(numberStr, 6, 0, block2h, blockWeightTranslator).trim();
}

function h(block, long, pesoAnterior, blockTranslator, weightTranslator) {
    let miPeso = pesoAnterior;
    let miBlock = block.slice(-1 * long);
    let restante = block.slice(0, block.length - long);

    //end recurse when
    if (isLastBlock(block, long)) {
        return blockTranslator(miBlock) + ' ' + weightTranslator(miPeso) + ' ';
    }

    miPeso = pesoAnterior++;
    return h(restante, long, miPeso + 1, blockTranslator, weightTranslator) + blockTranslator(miBlock) + ' ' + weightTranslator(miPeso) + ' ';
}

function blockWeightTranslator(peso) {
    return ["", "millones", "billones", "trillones", "cuatrillones", "quintillones"][peso];
}



function isLastBlock(numberStr, long) {
    return numberStr.length <= long;
}

module.exports = n2h;
