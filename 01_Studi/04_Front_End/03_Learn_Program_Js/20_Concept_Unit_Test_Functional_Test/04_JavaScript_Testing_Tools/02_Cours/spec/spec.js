describe('array', function() {
    it('shoul return -1 if item is not found', function () {
        expect([1, 2, 3].indexOf(4)).toBe(-1);
    })
})