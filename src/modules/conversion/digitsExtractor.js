define(function () {
    var DigitsExtractor = function () {

    };

    DigitsExtractor.prototype.getMultiplierFromDigit = function (digit) {
        var result = parseInt(digit);

        if (isNaN(result)) {
            result = digit.charCodeAt(0) - 55;
            return  result > 9 ? result : NaN;
        } else {
            return result;
        }
    };

    DigitsExtractor.prototype.getDigitFromMultiplier = function (multiplier) {

        if (multiplier > 9) {
            return  String.fromCharCode(multiplier + 55);
        } else {
            return multiplier;
        }
    };

    return DigitsExtractor;
});