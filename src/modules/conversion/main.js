define(['ConversionView', 'ConversionModel', 'ConversionController', 'Converter', 'ConversionModelValidator'], function (ConversionView, ConversionModel, ConversionController, Converter, ConversionModelValidator) {


    var ConversionModule = function () {
        this.model = new ConversionModel();
        this.conversionModelValidator = new ConversionModelValidator(this.model);
        this.converter = new Converter();
        this.controller = new ConversionController(this.model, this.converter);
        this.conversionView = new ConversionView(this.controller, this.model, this.conversionModelValidator);
    };

    ConversionModule.prototype.init = function ($target) {
        this.conversionView.renderTo($target);
    };

    return ConversionModule;
});