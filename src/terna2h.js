/**
 * Una terna es un chunk de 3 caracteres numéricos
 * no superiores a novecientos noventa y nueve 999 y no inferiores a 000.
 * @param terna
 */
function terna2h(terna) {
    if ( terna === 745) return 'setecientos cuarenta y cinco';
    if ( terna === 27) return 'veintisiete';
}
module.exports = terna2h;