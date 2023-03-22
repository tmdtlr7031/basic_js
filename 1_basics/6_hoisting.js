/**
 * 호이스팅
 *  - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 *  - let, const도 호이스팅이 된다.
 *      - Cannot access ~~ before initialization 에러나오는데 안되는거 아냐?!
 *          -> 호이스팅이 되고있다는 것을 의미.
 *          -> undefined로 할당이 되었지만, let, const로 인해 초기화 전에 접근이 안되는 것이다.
 */
console.log(_name);
var _name = '가나다라';
console.log(_name);

console.log(yuJin);
let yuJin = '안유진';