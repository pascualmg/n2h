module.exports = function hasOnlyChar(char, block) {
    return block
        .split('')
        .filter(function(item){return item!==char})
        .length === 0;
};