define(function () {

    var Converter = function () {

    };

    Converter.prototype.toDecimal = function (input, base) {
        var multiplier,
            i,
            result = 0,
            digits = input.split('');

        for (i = 0; i < digits.length; i++) {
            multiplier = this.getMultiplierFromDigit(digits[digits.length - i - 1]);

            result += multiplier * Math.pow(base, i);
        }

        return result;
    };

    Converter.prototype.fromDecimal = function (input, base) {

        var rest = input,
            result = '';

        if (input === 0) {
            return '0';
        }

        while (rest !== 0) {
            result = this.getDigitFromMultiplier(rest % base) + result;
            rest = Math.floor(rest / base);

        }

        return result;
    };

    Converter.prototype.getMultiplierFromDigit = function (digit) {
        var result = parseInt(digit);

        if (isNaN(result)) {
            return digit.charCodeAt(0) - 55;
        } else {
            return result;
        }
    };

    Converter.prototype.getDigitFromMultiplier = function (multiplier) {

        if (multiplier > 9) {
            return String.fromCharCode(multiplier + 55);
        } else {
            return multiplier;
        }
    };


    return Converter;
});
