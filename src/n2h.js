const terna2h = require('./terna2h.js');
const fillString = require('./utils/fillString.js');

function n2h(numberStr) {
    return h(numberStr, 6, 0, block2h, blockWeightTranslator);
}

function h(block, long, pesoAnterior, blockTranslator, weightTranslator) {
    let miPeso = pesoAnterior;
    let miBlock = block.slice(-1 * long);

    //end recurse when
    if (isLastBlock(block, long)) {
        return blockTranslator(block) + ' ' + weightTranslator(miPeso) + ' ';
    }

    miPeso = pesoAnterior++;
    nextBlock = block.slice(0, block.length-long);
    return  h(nextBlock,long, miPeso + 1,block2h, blockWeightTranslator) + blockTranslator(block) + ' ' + weightTranslator(miPeso) + ' ';
}

function blockWeightTranslator(peso){
     return ["", "millón", "billón", "trillon", "cuatrillón", "quintillón"][peso];
}
function block2h(block) {
    //assert
    if (block.length > 6){
        console.log('Error critico , a block2h le está llegando un block de más de 6 caracteres!! omg k cojones estás tocando');
    }
    //normalize
    if (block.length < 6){
        let fixedLenghtBlock = fillString(block, '0', 6);
      block = fixedLenghtBlock;
 }
    let result = "";
    let lastBlockLenght = block.length;
    let terna1 = "";
    let terna2 = "";

    let translatedTerna1 = "";
    let translatedTerna2 = "";

    if (lastBlockLenght <= 3) {
        terna1 = block;
        translatedTerna1 = terna2h(terna1);
        return translatedTerna1;
    }
    if (lastBlockLenght >= 3) {
        terna1 = block.slice(-3);
        terna2 = block.slice(0, 3);
        translatedTerna1 = terna2h(terna1);
        translatedTerna2 = terna2h(terna2);
        return translatedTerna2 + ' mil ' + translatedTerna1;
    }
}
function isLastBlock(numberStr, long){
   return numberStr.length <= long;
}
module.exports = n2h;
