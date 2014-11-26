define(function () {

    var INPUT_BASE_INVALID_MESSAGE = 'Input Base should be positive integer.',
        OUTPUT_BASE_INVALID_MESSAGE = 'Output Base should be positive integer.';

    var ConversionModelValidator = function (model) {
        this.model = model;
        this.messages = [];
        this.isValid = false;
    };

    ConversionModelValidator.prototype.validate = function () {
        this.isValid = true;
        this.messages = [];
        this.validateInputBase();
        this.validateOutputBase();
    };

    ConversionModelValidator.prototype.validateInputBase = function () {
        var valid = parseInt(this.model.inputBase) > 0;

        if (!valid) {
            this.messages.push(INPUT_BASE_INVALID_MESSAGE);
        }

        this.isValid = this.isValid && valid;
    };

    ConversionModelValidator.prototype.validateOutputBase = function () {
        var valid = parseInt(this.model.outputBase) > 0;

        if (!valid) {
            this.messages.push(OUTPUT_BASE_INVALID_MESSAGE);
        }

        this.isValid = this.isValid && valid;
    };

    return ConversionModelValidator;
});