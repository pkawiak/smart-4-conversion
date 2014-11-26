define(function () {

    var ConversionController = function (conversionModel, converter) {
        this.model = conversionModel;
        this.converter = converter;
    };

    ConversionController.prototype.convert = function () {

        var toConvert = this.model.numberToConvert,
            inputBase = this.model.inputBase,
            outputBase = this.model.outputBase,
            inDecimal,
            inOutputBase;

        inDecimal = this.converter.toDecimal(toConvert, inputBase);
        inOutputBase = this.converter.fromDecimal(inDecimal, outputBase);

        this.model.updateConversionResult(inOutputBase);

    };

    ConversionController.prototype.clearResult = function () {
        this.model.updateConversionResult('');
    };

    return ConversionController;

});