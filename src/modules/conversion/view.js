define(['jquery'], function ($) {

    var View = function (conversionController, model, validator) {
        this.controller = conversionController;
        this.model = model;
        this.validator = validator;

        this.model.addChangeListener($.proxy(this.onModelChange, this));
    };

    View.prototype.renderTo = function ($target) {

        this.$conversionForm = $target.find('.conversion-form');

        this.$systemInput = $target.find('.input-base');
        this.$systemOutput = $target.find('.output-base');
        this.$toConvert = $target.find('.to-convert');
        this.$conversionResult = $target.find('.conversion-result');
        this.$conversionErrorContainer = $target.find('.conversion-error-container');

        this.$conversionForm.submit($.proxy(this.onFormSubmit, this));

        this.$systemInput.change($.proxy(this.onSystemInputChange, this));
        this.$systemOutput.change($.proxy(this.onSystemOutputChange, this));
        this.$toConvert.change($.proxy(this.onToConvertChange, this));

    };

    View.prototype.onSystemInputChange = function () {
        this.model.updateInputBase(this.$systemInput.val());
    };

    View.prototype.onSystemOutputChange = function () {
        this.model.updateOutputBase(this.$systemOutput.val());
    };

    View.prototype.onToConvertChange = function () {
        this.model.updateNumberToConvert(this.$toConvert.val());
    };

    View.prototype.onFormSubmit = function (event) {
        event.preventDefault();

        this.clearValidationErrors();

        this.validator.validate();

        if (this.validator.isValid) {
            this.controller.convert();
        } else {
            this.displayValidationErrors();
        }
    };

    View.prototype.clearValidationErrors = function () {
        this.controller.clearResult();
        this.$conversionErrorContainer.html('');
    };

    View.prototype.displayValidationErrors = function () {
        var i;

        for (i = 0; i < this.validator.messages.length; i++) {
            this.renderErrorMessage(this.validator.messages[i]);
        }
    };

    View.prototype.renderErrorMessage = function (errorMessage) {
        this.$conversionErrorContainer.append($('<div>').html(errorMessage).addClass('alert alert-danger'));
    };

    View.prototype.onModelChange = function () {
        this.$systemInput.val(this.model.inputBase);
        this.$systemOutput.val(this.model.outputBase);
        this.$toConvert.val(this.model.numberToConvert);
        this.$conversionResult.html(this.model.conversionResult);

        if (this.model.conversionResult) {
            this.$conversionResult.show();
        } else {
            this.$conversionResult.hide();
        }

    };


    return View;

});