/**
 * Translates the weight of the period.
 *
 * @param weight
 * @returns {string}
 */
module.exports = function weightPeriodTranslator(weight, isPlural) {
        const periodTranslation = ["", "mill", "bill", "trill", "cuatrill", "quintill", "sextill", "septill", "octill", "nonill"];
        const singularPrefix = "ón";
        const pluralPrefix = "ones";

        const hasOverflow = weight > periodTranslation.length;
        let translatedWeightStr = "notTranslated";

        if (isPlural === 'undefined'){
                isPlural = true;
        }
        if(!hasOverflow){
            translatedWeightStr =  periodTranslation[weight]
                .concat((isPlural === true)?pluralPrefix:singularPrefix)
            ;
        }
        return translatedWeightStr;
};
