require(['jquery', 'ConversionModule'], function ($, ConversionModule) {
    $(function () {
        var conversionModule1 = new ConversionModule(),
            conversionModule2 = new ConversionModule(),
            conversionModule3 = new ConversionModule(),
            conversionModule4 = new ConversionModule(),
            conversionModule5 = new ConversionModule(),
            conversionModule6 = new ConversionModule();

        conversionModule1.init($('.module-1'));
        conversionModule2.init($('.module-2'));
        conversionModule3.init($('.module-3'));
        conversionModule4.init($('.module-4'));
        conversionModule5.init($('.module-5'));
        conversionModule6.init($('.module-6'));
    });
});