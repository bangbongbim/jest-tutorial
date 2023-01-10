# Jest Tutorials

## expect

특정 값이 ~~일 것이다라고 사전에 정의를 하고, 통과를 하면 테스트를 성공 통과를 하지 않으면 테스트를 실패

## toBe

matchers라고 부르는 함수이며, 특정 값이 어떤 조건을 만족하는지,
또는 어떤 함수가 실행이 됐는지, 에러가 났는지 등을 확인할 수 있음.

## it

test와 작동방식은 완전히 똑같음. it을 사용하게 되면 테스트케이스를 영어로 작성하는 경우, "말이 되게" 작성할 수 있음.

## describe

테스트 케이스 작성 시 describe라는 키워드를 사용하면 여러 테스트케이스를 묶을 수 있음.

```js
const { sum, sumOf } = require('./sum');

describe('sum', () => {
    it('calculates 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('calculates all numbers', () => {
        const array = [1, 2, 3, 4, 5];
        expect(sumOf(array)).toBe(15);
    });
});
```

---

# 리팩토링

테스트 코드를 작성했을 때 얻을 수 있는 이점은, 리팩토링 이후 코드가 제대로 작동하는 있는 것을 검증하기 매우 간편하다는 것.
