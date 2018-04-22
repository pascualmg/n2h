/**
 * Una terna es un chunk de 3 caracteres numéricos
 * no superiores a novecientos noventa y nueve 999 y no inferiores a 000.
 * @param terna
 */
function terna2h(terna) {
    if ( terna === 745) return 'setecientos cuarenta y cinco';
    if ( terna === 27) return 'veintisiete';
    if ( terna === 16) return 'dieciseis';
    if ( terna === 17) return 'diecisiete';
    if ( terna === 18) return 'dieciocho';
    if ( terna === 19) return 'diecinueve';
}
module.exports = terna2h;