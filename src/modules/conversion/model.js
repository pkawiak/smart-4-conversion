define(function () {

    var ConversionModel = function () {
        this.changeHandlers = [];
    };

    ConversionModel.prototype.updateInputBase = function (newValue) {

        if (this.inputBase !== newValue) {
            this.inputBase = newValue;
            this.notifyAboutChange();
        }
    };

    ConversionModel.prototype.updateOutputBase = function (newValue) {
        if (this.outputBase !== newValue) {
            this.outputBase = newValue;
            this.notifyAboutChange();
        }
    };

    ConversionModel.prototype.updateNumberToConvert = function (newValue) {
        if (this.numberToConvert !== newValue) {
            this.numberToConvert = newValue;
            this.notifyAboutChange();
        }
    };

    ConversionModel.prototype.updateConversionResult = function (newValue) {
        if (this.conversionResult !== newValue) {
            this.conversionResult = newValue;
            this.notifyAboutChange();
        }
    };


    ConversionModel.prototype.addChangeListener = function (handler) {
        this.changeHandlers.push(handler);
    };


    ConversionModel.prototype.notifyAboutChange = function () {
        var i,
            handler;
        for (i = 0; i < this.changeHandlers.length; i++) {
            handler = this.changeHandlers[i];
            handler();
        }
    };

    return ConversionModel;
});