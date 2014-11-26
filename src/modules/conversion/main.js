define(["ConversionView", "ConversionModel", "ConversionController", "Converter"], function (ConversionView, ConversionModel, ConversionController, Converter) {


    var ConversionModule = function () {
        this.conversionModel = new ConversionModel();
        this.converter = new Converter();
        this.conversionController = new ConversionController(this.conversionModel, this.converter);
        this.conversionView = new ConversionView(this.conversionController, this.conversionModel);
    };

    ConversionModule.prototype.init = function ($target) {
        this.conversionView.renderTo($target);
    };

    return ConversionModule;
});