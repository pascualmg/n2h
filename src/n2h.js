const periodTranslator = require('./periodTranslator.js');


function n2h(numberStr) {
    const periodLenght = 6;
    const initialWeight = 0;
    return parseRecursively (numberStr, periodLenght, initialWeight, periodTranslator).trim();
}
/**
 * https://es.wikipedia.org/wiki/Anexo:Nombres_de_los_n%C3%BAmeros_en_espa%C3%B1ol
 * https://wikimedia.org/api/rest_v1/media/math/render/svg/6e2fb44a6df602e5c9522edf731d3889cd6c208b
 * Nomenclatura standard de los blocks según la wikipedia.
 * si un block es una string que tiene un tamaño fijo de 6 caracteres es un period.
 * si un block es una string que tiene un tamaño fijo de 3 caracteres es una terna.
 * si un block es una string que tiene un tamaño fijo de 2 caracteres es una tupla.
**/
function parseRecursively(block, long, pesoAnterior, blockTranslator, weightTranslator) {
    let miPeso = pesoAnterior;
    let miBlock = block.slice(-1 * long);
    let restante = block.slice(0, block.length - long);
    let isTheLastBlock = isLastBlock(block, long);
    //end recurse when
    if (isTheLastBlock) {
        return blockTranslator(miBlock, miPeso);
    }
    miPeso = pesoAnterior++;
    return parseRecursively (restante, long, miPeso + 1, blockTranslator) + blockTranslator(miBlock,miPeso);
}

function isLastBlock(numberStr, long) {
    return numberStr.length <= long;
}

module.exports = n2h;
