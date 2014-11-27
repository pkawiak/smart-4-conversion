define(function () {

    var ConversionModelValidator = function (model, digitsExtractor) {
        this.model = model;
        this.digitsExtractor = digitsExtractor;
        this.messages = [];
        this.isValid = false;
    };

    ConversionModelValidator.prototype.validate = function () {
        this.isValid = true;
        this.messages = [];
        this.validateInputBase();
        this.validateOutputBase();
        this.validateNumberToConvert();
    };

    ConversionModelValidator.prototype.validateInputBase = function () {
        var valid = parseInt(this.model.inputBase) > 1;

        if (!valid) {
            this.messages.push('Input Base should be positive integer greater than 1.');
        }

        this.isValid = this.isValid && valid;
    };

    ConversionModelValidator.prototype.validateOutputBase = function () {
        var valid = parseInt(this.model.outputBase) > 1;

        if (!valid) {
            this.messages.push('Output Base should be positive integer greater than 1.');
        }

        this.isValid = this.isValid && valid;
    };

    ConversionModelValidator.prototype.validateNumberToConvert = function () {
        var i,
            valid,
            digits,
            message,
            toConvert,
            offendingDigit;

        valid = true;
        toConvert = this.model.numberToConvert || '';
        digits = toConvert.split('');

        if (digits.length) {
            for (i = 0; i < digits.length; i++) {
                if (!this.isValidDigit(digits[i])) {
                    offendingDigit = digits[i];
                    valid = false;
                    break;
                }
            }
        } else {
            valid = false;
        }

        if (!valid) {
            message = 'Number to convert should be valid positive number in Input Base.';
            if (offendingDigit) {
                message += ' Offending digit: ' + offendingDigit;
            }
            this.messages.push(message);
        }

        this.isValid = this.isValid && valid;
    };

    ConversionModelValidator.prototype.isValidDigit = function (digit) {
        var multiplier;

        multiplier = this.digitsExtractor.getMultiplierFromDigit(digit);

        return multiplier >= 0 && multiplier < this.model.inputBase;
    };

    return ConversionModelValidator;
});