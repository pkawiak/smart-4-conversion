define(["jquery"], function ($) {

    var View = function (conversionController, conversionModel) {
        this.conversionController = conversionController;
        this.conversionModel = conversionModel;

        this.conversionModel.addChangeListener($.proxy(this.onModelChange, this));
    };

    View.prototype.renderTo = function ($target) {

        this.$conversionForm = $target.find(".conversion-form");

        this.$systemInput = $target.find(".input-base");
        this.$systemOutput = $target.find(".output-base");
        this.$toConvert = $target.find(".to-convert");
        this.$conversionResult = $target.find(".conversion-result");

        this.$conversionForm.submit($.proxy(this.onFormSubmit, this));

        this.$systemInput.change($.proxy(this.onSystemInputChange, this));
        this.$systemOutput.change($.proxy(this.onSystemOutputChange, this));
        this.$toConvert.change($.proxy(this.onToConvertChange, this));

    };

    View.prototype.onSystemInputChange = function () {
        this.conversionModel.updateInputBase(this.$systemInput.val());
    };

    View.prototype.onSystemOutputChange = function () {
        this.conversionModel.updateOutputBase(this.$systemOutput.val());
    };

    View.prototype.onToConvertChange = function () {
        this.conversionModel.updateNumberToConvert(this.$toConvert.val());
    };

    View.prototype.onFormSubmit = function (event) {
        event.preventDefault();

        this.conversionController.convert();
    };

    View.prototype.onModelChange = function () {
        this.$systemInput.val(this.conversionModel.inputBase);
        this.$systemOutput.val(this.conversionModel.outputBase);
        this.$toConvert.val(this.conversionModel.numberToConvert);
        this.$conversionResult.html(this.conversionModel.conversionResult);
    };


    return View;

});