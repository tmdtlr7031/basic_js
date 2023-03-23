/**
 * copy by value        : 값에 의한 전달
 * copy by reference    : 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value 다
 *      - Number, String, Boolean, undefinded, null, Symbol
 * 2) 객체는 copy by reference 다
 */

// 1)
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

console.log('-----------------------');

clone += ' 안유진 입니다.';
console.log(original);
console.log(clone);
console.log(original === clone);

console.log('==================================');

// 2)
let originalObj = {
    name : '안유진',
    group : '아이브',
}
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);

console.log('-----------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);
console.log(originalObj === cloneObj);

// '값이 같다고 같은 객체로 인식하는게 아니다' 증명
originalObj = {name : '이름', group : '그룹'};
cloneObj = {name : '이름', group : '그룹'};
console.log(originalObj === cloneObj);

console.log('==================================');

/**
 *  spread operator
 */
const yuJin = {...originalObj};
console.log(yuJin);
console.log(yuJin === originalObj);

const yuJin2 = {...originalObj, year:2003};
console.log(yuJin2);

// 추가하려는 key 값이 spread operator 사용하는 객체에 있다면 순서에 따라 덮어씌어질 수도 있다.
const yuJin3 = {name:'spread operator가 이긴다.', ...originalObj};
console.log(yuJin3);

const yuJin4 = {...originalObj, name:'내가 덮어쓴다.'};
console.log(yuJin4);

const numbers = [1,3,5];
const numbers2 = [10, ...numbers];
console.log(numbers2);