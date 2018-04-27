const block2h = require('./periodTranslator.js');

// https://es.wikipedia.org/wiki/Anexo:Nombres_de_los_n%C3%BAmeros_en_espa%C3%B1ol
// https://wikimedia.org/api/rest_v1/media/math/render/svg/6e2fb44a6df602e5c9522edf731d3889cd6c208b
function n2h(numberStr) {
    const periodLenght = 6;
    const initialWeight = 0;
    return parseRecursively (numberStr, periodLenght, initialWeight, block2h, blockWeightTranslator).trim();
}

function parseRecursively(block, long, pesoAnterior, blockTranslator, weightTranslator) {
    let miPeso = pesoAnterior;
    let miBlock = block.slice(-1 * long);
    let restante = block.slice(0, block.length - long);
    let isTheLastBlock = isLastBlock(block, long);
    //end recurse when
    if (isTheLastBlock) {
        let lastDigit = miBlock.slice(-1);
        if(lastDigit === "1"){
            return blockTranslator(miBlock) + ' ' + weightTranslator(miPeso) + ' ';
        }
        return blockTranslator(miBlock).concat("o") + ' ' + weightTranslator(miPeso) + ' ';
    }



    miPeso = pesoAnterior++;
    return parseRecursively (restante, long, miPeso + 1, blockTranslator, weightTranslator) + blockTranslator(miBlock) + ' ' + weightTranslator(miPeso) + ' ';
}

function blockWeightTranslator(peso) {
    return ["", "millones", "billones", "trillones", "cuatrillones", "quintillones"][peso];
}

function isLastBlock(numberStr, long) {
    return numberStr.length <= long;
}

module.exports = n2h;
