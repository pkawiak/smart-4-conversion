define(['ConversionView', 'ConversionModel', 'ConversionController', 'Converter', 'ConversionModelValidator', 'DigitsExtractor'], function (ConversionView, ConversionModel, ConversionController, Converter, ConversionModelValidator, DigitsExtractor) {


    var ConversionModule = function () {
        this.model = new ConversionModel();
        this.digitsExtractor = new DigitsExtractor();
        this.conversionModelValidator = new ConversionModelValidator(this.model, this.digitsExtractor);
        this.converter = new Converter(this.digitsExtractor);
        this.controller = new ConversionController(this.model, this.converter);
        this.conversionView = new ConversionView(this.controller, this.model, this.conversionModelValidator);
    };

    ConversionModule.prototype.init = function ($target) {
        this.conversionView.renderTo($target);
    };

    return ConversionModule;
});