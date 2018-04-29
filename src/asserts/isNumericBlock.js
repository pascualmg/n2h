/**
 * basado en https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
 * @param block
 * @returns {boolean}
 */
module.exports = function isNumericBlock(block) {
    return /^\d+$/.test(block);
};