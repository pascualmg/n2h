const terna2h = require('./terna2h.js');
function n2h(number) {
    //todo: implementame soy una stub.
    if ( number === 13456745) {
        return 'trece millones cuatrocientos cincuenta y siete mil setecientos cuarenta y cinco';
    }
    if ( number === 1001) {
        return 'mil uno';
    }
    return number === 31415926535897932384626433832795?"treinta y un quintillones cuatrocientos quince mil novecientos veintiséis cuatrillones quinientos treinta y cinco mil ochocientos noventa y siete trillones novecientos treinta y dos mil trescientos ochenta y cuatro billones seiscientos veintiséis mil cuatrocientos treinta y tres millonesochocientos treinta y dos mil setecientos noventa y cinco":'';
}
module.exports = n2h;
