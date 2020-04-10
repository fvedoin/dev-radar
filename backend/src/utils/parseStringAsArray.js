module.exports = function parseStringAsArray(arrayAsString) {

    return arrayAsString.split(',').map(element => element.trim());

}