define(['ConversionModel'], function (ConversionModel) {

    describe('Conversion Model Spec', function () {

        var model;

        beforeEach(function () {
            model = new ConversionModel();
        });

        it('should sanitize input', function () {
            //given
            model.updateNumberToConvert('29a');

            //when
            //then
            expect(model.numberToConvert).toBe('29A');
        });

    });

});