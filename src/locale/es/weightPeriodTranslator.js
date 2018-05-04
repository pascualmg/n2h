/**
 * Translates the weight of the period.
 *
 * @param weight
 * @returns {string}
 */
module.exports = function weightPeriodTranslator(weight, isPlural) {

        const regulars = [
            "un",
            "duo",
            "tri",
            "cua",
            "quin",
            "sex",
            "sep",
            "oct",
            "non",
            "dec",
        ];

        const periodTranslation = [
            "",
            "mill",
            "bill",
            "trill",
            "cuatrill",
            "quintill",
            "sextill",
            "septill",
            "octill",
            "nonill",
            "decill",
            "undecill",
            "duodecill",
            "tridecill",
            "tetradecill",
            "pentadecill",
            "sextadecill",
            "septadecill",
            "octadecill",
            "nonidecill",
            "vigentill",
            "unvigentill",
            "duovigentill",
        ];
        const singularPrefix = "ón";
        const pluralPrefix = "ones";
        const hasOverflow = weight > periodTranslation.length -1;

        let translatedWeightStr = "notTranslated";

        if(!hasOverflow){
            translatedWeightStr =  periodTranslation[weight]
                .concat((isPlural === true)?pluralPrefix:singularPrefix)
            ;
        }
        return translatedWeightStr;
};
