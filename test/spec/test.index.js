var lib = require('../../lib/dratini');

describe('Library', function () {
    it('should capture all properties', function () {
        expect(lib).toEqual(jasmine.any(Object));
    });

    it('should have capture method', function () {
        expect(lib.capture).toEqual(jasmine.any(Function));
    });

    describe('method to capture all object properties', function () {
        it('should ignore non-object arguments', function () {
            expect(lib.capture(1)).toEqual([]);
            expect(lib.capture('foo')).toEqual([]);
            expect(lib.capture(undefined)).toEqual([]);
            expect(lib.capture(null)).toEqual([]);
        });

        it('should return list of properties', function () {
            expect(lib.capture({ foo: null })).toEqual(['foo']);
        });
    });
});
