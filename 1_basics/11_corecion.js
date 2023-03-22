/**
 * 타입변환 (Type Conversion)
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 12;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2); // string에는 * 가 없기때문에 98*2
console.log('98' - 2); // string에는 - 가 없기때문에 98-2

console.log('-----------------');

/**
 * 명시적 변환 몇가지더
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof +'1', +'1');

console.log('-----------------');

/**
 * Boolean 타입으로의 변환
 */
console.log(!'asdfasdf');
console.log(!!'asdfasdf');
console.log(!!'');

console.log(!!0);
console.log(!!'0');

console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */