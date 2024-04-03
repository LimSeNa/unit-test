const check = require('../check');

describe('check', () => {
    let onSuccess;
    let onFail;

    // 초기화
    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);

        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onSuccess).toHaveBeenCalledWith('yes');
        expect(onFail).toHaveBeenCalledTimes(0);
    });
});