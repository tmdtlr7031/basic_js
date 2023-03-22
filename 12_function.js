/**
 * Arrow 함수
 */
const multiply = (x, y) => {
    return x * y;
}
console.log(multiply(2,4));

const multiply2 = (x, y) => x * y
console.log(multiply2(2,4));

const multiply3 = x => x * 4;
console.log(multiply3(2));

const multiply4 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply4(2)(5)(7));

// multiply4 같은 의미
function multiply5(x) {
    return function(y) {
        return function(z) {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}

const multiply6 = function(x,y) {
    return x*y;
}
console.log(multiply6(4,5));

const multiply7 = function(x,y,z) {
    console.log(arguments); // x,y,z에 실제 입력되는값 출력
    return x*y*z;
}
console.log(multiply7(4,5,7));

const multiplyAll = function(...arguments) { // 무한정 받음
    return Object.values(arguments).reduce((prev, curr) => prev*curr, 1);
}
console.log(multiplyAll(1,2,3,4,5));

// 즉시실행함수 (immediately invoked function)
(function(x,y) {
    console.log(x*y);
})(4,5);

console.log(typeof multiply);
console.log(multiply instanceof Object); // *** 함수는 Object ***