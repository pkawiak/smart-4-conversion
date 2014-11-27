define(['Converter', 'DigitsExtractor'], function (Converter, DigitsExtractor) {

    describe('Converter Spec', function () {

        var converter,
            digitsExtractor;

        beforeEach(function () {
            digitsExtractor = new DigitsExtractor();
            converter = new Converter(digitsExtractor);
        });

        it('should convert from 10', function () {
            expect(converter.toDecimal('0', 10)).toEqual(0);
            expect(converter.toDecimal('1', 10)).toEqual(1);
            expect(converter.toDecimal('1337', 10)).toEqual(1337);
        });

        it('should convert from 2', function () {
            expect(converter.toDecimal('0', 2)).toEqual(0);
            expect(converter.toDecimal('1', 2)).toEqual(1);
            expect(converter.toDecimal('1011', 2)).toEqual(11);
            expect(converter.toDecimal('101010101010', 2)).toEqual(2730);
        });

        it('should convert from 8', function () {
            expect(converter.toDecimal('0', 8)).toEqual(0);
            expect(converter.toDecimal('1', 8)).toEqual(1);
            expect(converter.toDecimal('235', 8)).toEqual(157);
            expect(converter.toDecimal('123', 8)).toEqual(83);
            expect(converter.toDecimal('777', 8)).toEqual(511);
        });

        it('should convert from 16', function () {
            expect(converter.toDecimal('0', 16)).toEqual(0);
            expect(converter.toDecimal('1', 16)).toEqual(1);
            expect(converter.toDecimal('1C4', 16)).toEqual(452);
            expect(converter.toDecimal('FF', 16)).toEqual(255);
            expect(converter.toDecimal('29A', 16)).toEqual(666);
        });

        it('should convert from 7', function () {
            expect(converter.toDecimal('0', 7)).toEqual(0);
            expect(converter.toDecimal('1', 7)).toEqual(1);
            expect(converter.toDecimal('666', 7)).toEqual(342);
        });

        it('should convert to 10', function () {
            expect(converter.fromDecimal(0, 10)).toEqual('0');
            expect(converter.fromDecimal(1, 10)).toEqual('1');
            expect(converter.fromDecimal(1337, 10)).toEqual('1337');
        });

        it('should convert to 2', function () {
            expect(converter.fromDecimal(0, 2)).toEqual('0');
            expect(converter.fromDecimal(1, 2)).toEqual('1');
            expect(converter.fromDecimal(11, 2)).toEqual('1011');
            expect(converter.fromDecimal(2730, 2)).toEqual('101010101010');
        });

        it('should convert from 8', function () {
            expect(converter.fromDecimal(0, 8)).toEqual('0');
            expect(converter.fromDecimal(1, 8)).toEqual('1');
            expect(converter.fromDecimal(157, 8)).toEqual('235');
            expect(converter.fromDecimal(83, 8)).toEqual('123');
            expect(converter.fromDecimal(511, 8)).toEqual('777');
        });

        it('should convert from 16', function () {
            expect(converter.fromDecimal(0, 16)).toEqual('0');
            expect(converter.fromDecimal(1, 16)).toEqual('1');
            expect(converter.fromDecimal(452, 16)).toEqual('1C4');
            expect(converter.fromDecimal(255, 16)).toEqual('FF');
            expect(converter.fromDecimal(666, 16)).toEqual('29A');
        });

        it('should convert from 7', function () {
            expect(converter.fromDecimal(0, 7)).toEqual('0');
            expect(converter.fromDecimal(1, 7)).toEqual('1');
            expect(converter.fromDecimal(342, 7)).toEqual('666');
        });
    });

});