define(function () {

    var Converter = function (digitsExtractor) {
        this.digitsExtractor = digitsExtractor;
    };

    Converter.prototype.toDecimal = function (input, base) {
        var multiplier,
            i,
            result = 0,
            digits = input.split('');

        for (i = 0; i < digits.length; i++) {
            multiplier = this.digitsExtractor.getMultiplierFromDigit(digits[digits.length - i - 1]);

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
            result = this.digitsExtractor.getDigitFromMultiplier(rest % base) + result;
            rest = Math.floor(rest / base);

        }

        return result;
    };

    return Converter;
});
