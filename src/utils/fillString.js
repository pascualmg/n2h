module.exports = function fillString(str, char2fill, fixedLenght) {

    let strResult = str;

    if (str.length < fixedLenght) {
        let cachoQueFaltaLenght = fixedLenght - str.length;

        let cachoQueFalta = "";
        for (let i = 0; i < cachoQueFaltaLenght; i++) {
            cachoQueFalta = cachoQueFalta.concat(char2fill);
        }
        strResult = cachoQueFalta.concat(str);
    }
    return strResult;
};