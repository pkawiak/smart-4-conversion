define(function () {

    var ConversionModel = function () {
        this.changeHandlers = [];
    };

    ConversionModel.prototype.updateInputBase = function (newValue) {
        this.assignValueToProperty(newValue, 'inputBase');
    };

    ConversionModel.prototype.updateOutputBase = function (newValue) {
        this.assignValueToProperty(newValue, 'outputBase');
    };

    ConversionModel.prototype.updateNumberToConvert = function (newValue) {
        this.assignValueToProperty(this.sanitizeToConvert(newValue), 'numberToConvert');
    };

    ConversionModel.prototype.updateConversionResult = function (newValue) {
        this.assignValueToProperty(newValue, 'conversionResult');
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

    ConversionModel.prototype.sanitizeToConvert = function(newValue) {
        return newValue ? newValue.toUpperCase() : '';
    };

    ConversionModel.prototype.assignValueToProperty = function (newValue, propertyName) {

        var currentValue;

        currentValue = this[propertyName];

        if (currentValue !== newValue) {
            this[propertyName] = newValue;
            this.notifyAboutChange();
        }

    };

    return ConversionModel;
});