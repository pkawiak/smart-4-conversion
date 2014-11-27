define(['ConversionController', 'ConversionModel', 'Converter', 'DigitsExtractor'], function (ConversionController, ConversionModel, Converter, DigitsExtractor) {

    describe('Conversion Controller Spec', function () {

        var controller,
            model,
            converter,
            digitsExtractor;

        beforeEach(function () {
            digitsExtractor = new DigitsExtractor();
            converter = new Converter(digitsExtractor);
            model = new ConversionModel();
            controller = new ConversionController(model, converter);
        });

        it('should convert from 10 to 10', function () {

            //given
            model.updateInputBase(10);
            model.updateOutputBase(10);
            model.updateNumberToConvert('1337');

            //when
            controller.convert();

            //then;
            expect(model.conversionResult).toBe('1337');
        });

        it('should convert from 16 to 10', function () {

            //given
            model.updateInputBase(16);
            model.updateOutputBase(10);
            model.updateNumberToConvert('29A');

            //when
            controller.convert();

            //then;
            expect(model.conversionResult).toBe('666');
        });

        it('should convert from 10 to 16', function () {

            //given
            model.updateInputBase(10);
            model.updateOutputBase(16);
            model.updateNumberToConvert('666');

            //when
            controller.convert();

            //then;
            expect(model.conversionResult).toBe('29A');
        });

        it('should convert from 8 to 16', function () {

            //given
            model.updateInputBase(8);
            model.updateOutputBase(16);
            model.updateNumberToConvert('666');

            //when
            controller.convert();

            //then;
            expect(model.conversionResult).toBe('1B6');
        });

        it('should convert from 16 to 2', function () {

            //given
            model.updateInputBase(16);
            model.updateOutputBase(2);
            model.updateNumberToConvert('1A7');

            //when
            controller.convert();

            //then;
            expect(model.conversionResult).toBe('110100111');
        });

        it('should clear result', function () {

            //given
            model.updateConversionResult('666');

            //when
            controller.clearResult();

            //then;
            expect(model.conversionResult).toBe('');
        });
    });

});