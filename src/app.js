require(['jquery', 'ConversionModule'], function ($, ConversionModule) {
    $(function () {
        var conversionModule = new ConversionModule();

        conversionModule.init($('.module-conversion'));
    });
});