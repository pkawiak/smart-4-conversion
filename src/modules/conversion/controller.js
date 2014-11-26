define(function () {

    var ConversionController = function (conversionModel, converter) {
        this.conversionModel = conversionModel;
        this.converter = converter;
    };

    ConversionController.prototype.convert = function () {

        var toConvert = this.conversionModel.numberToConvert,
            inputBase = this.conversionModel.inputBase,
            outputBase = this.conversionModel.outputBase,
            inDecimal,
            inOutputBase;

        inDecimal = this.converter.toDecimal(toConvert, inputBase);
        inOutputBase = this.converter.fromDecimal(inDecimal, outputBase);

        this.conversionModel.updateConversionResult(inOutputBase);

    };

    return ConversionController;

});