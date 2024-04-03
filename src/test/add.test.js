const add = require('../add');

test('add', () => {
    // 콜백 함수 안에 원하는 테스트 코드 작성
    expect(add(1, 2)).toBe(3);
});

