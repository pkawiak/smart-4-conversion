define(['ConversionModel', 'ConversionModelValidator', 'DigitsExtractor'], function (ConversionModel, ConversionModelValidator, DigitsExtractor) {

    describe('Conversion Model Validator Spec', function () {

        var model,
            validator,
            digitsExtractor;

        beforeEach(function () {
            digitsExtractor = new DigitsExtractor();
            model = new ConversionModel();
            validator = new ConversionModelValidator(model, digitsExtractor);
        });

        it('should be valid', function () {

            //given
            model.updateInputBase('16');
            model.updateOutputBase('10');
            model.updateNumberToConvert('29A');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(true);
            expect(validator.messages.length).toBe(0);
        });

        it('should be invalid at start', function () {
            //given
            //when
            //then
            expect(validator.isValid).toBe(false);
        });

        it('should be invalid with no input base', function () {

            //given
            model.updateInputBase('');
            model.updateOutputBase('10');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Input Base should be positive integer greater than 1.');
        });

        it('should be invalid with negative input base', function () {

            //given
            model.updateInputBase('-16');
            model.updateOutputBase('10');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Input Base should be positive integer greater than 1.');
        });

        it('should be invalid with input base equal to 1', function () {

            //given
            model.updateInputBase('1');
            model.updateOutputBase('10');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Input Base should be positive integer greater than 1.');
        });

        it('should be invalid with crap input base', function () {

            //given
            model.updateInputBase('crap');
            model.updateOutputBase('10');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Input Base should be positive integer greater than 1.');
        });


        it('should be invalid with no output base', function () {

            //given
            model.updateInputBase('10');
            model.updateOutputBase('');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Output Base should be positive integer greater than 1.');
        });

        it('should be invalid with negative output base', function () {

            //given
            model.updateInputBase('16');
            model.updateOutputBase('-10');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Output Base should be positive integer greater than 1.');
        });

        it('should be invalid with output base equal to 1', function () {

            //given
            model.updateInputBase('16');
            model.updateOutputBase('1');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Output Base should be positive integer greater than 1.');
        });

        it('should be invalid with crap output base', function () {

            //given
            model.updateInputBase('10');
            model.updateOutputBase('crap');
            model.updateNumberToConvert('29a');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Output Base should be positive integer greater than 1.');
        });

        it('should be invalid with no number to convert', function () {

            //given
            model.updateInputBase('10');
            model.updateOutputBase('10');
            model.updateNumberToConvert('');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Number to convert should be valid positive number in Input Base.');
        });

        it('should be invalid with invalid decimal digit A', function () {

            //given
            model.updateInputBase('10');
            model.updateOutputBase('10');
            model.updateNumberToConvert('1A');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Number to convert should be valid positive number in Input Base. Offending digit: A');
        });

        it('should be invalid with invalid decimal digit ;', function () {

            //given
            model.updateInputBase('10');
            model.updateOutputBase('10');
            model.updateNumberToConvert('1;');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Number to convert should be valid positive number in Input Base. Offending digit: ;');
        });

        it('should be invalid with invalid decimal digit -', function () {

            //given
            model.updateInputBase('10');
            model.updateOutputBase('10');
            model.updateNumberToConvert('-1');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Number to convert should be valid positive number in Input Base. Offending digit: -');
        });

        it('should be invalid with invalid hex digit G', function () {

            //given
            model.updateInputBase('16');
            model.updateOutputBase('10');
            model.updateNumberToConvert('29G');

            //when
            validator.validate();

            //then
            expect(validator.isValid).toBe(false);
            expect(validator.messages).toContain('Number to convert should be valid positive number in Input Base. Offending digit: G');
        });


    });

});