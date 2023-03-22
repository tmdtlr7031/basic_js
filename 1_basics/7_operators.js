/**
 * 단축평가 (short circuit evaluation)
 *  - 참고 : https://dkje.github.io/2020/09/02/SyntaxSugar/
 * 
 *  - &&를 사용했을 때 좌측이 true면 우측값 반환, false면 좌측값 반환
 *  - ||를 사용했을 때 좌측이 true면 좌측값 반환, false면 우측값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

console.log('============================');

/**
 * null 연산자
 * - null이나 undefined면 우측값을 반환
 */
let isNull;
isNull = isNull ?? 'null이면 채워진다.';
console.log(isNull);