/**
 * this
 * 
 * JS는 렉시컬 스코프를 사용하기 때문에, 함수의 상위 스코프가 정의 시점에 평가된다.
 * *** 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다. ***
 */
const testFunction = function() {
    return this;
}
console.log(testFunction()); // 웹에선 window 객체
console.log(testFunction() === global);

const yuJin = {
    name : '안유진',
    year : 2003,
    sayHello: function() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}
console.log(yuJin.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;
    this.sayHello = function() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

// Person.prototype.dance = function() {
//     return `${this.name}이 춤을 춥니다.`;
// }
// console.log(yuJin2.dance()); // prototype에 정의해도 this는 yuJin2를 가리킨다.


// 함수의 상위(function(){})에서 this를 사용하면 this가 해당 객체를 가리키지만
// 아래와 같이 그 외에 위치에서 함수를 선언하고 this를 사용한 경우 this는 global객체를 가리킴.
Person.prototype.dance = function() {
    function dance2() {
        return `${this.name}이 춤을 춥니다.`;
    }
    return dance2();
}
console.log(yuJin2.dance());

/**
 * this 키워드가 어떤걸 가리키냐?
 * 
 * 1) 일반 함수 호출할떈 this가 최상위 객체 (global 혹은 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 * 
 * 2,3 번아니면 다 1번이다~
 */


/**
 * 원하는 this 값으로 맵핑하는법
 * 
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
    return this.name;
}
console.log(returnName()); // global에 바인딩

const yuJin3 = {
    name : '안유진',
}
console.log(returnName.call(yuJin3)); // returnName을 yuJin3에 바인딩하겠다
console.log(returnName.apply(yuJin3));

/**
 * 1) call : 컴마를 기본으로 아큐먼트를 순서대로 넘겨줌
 * 2) apply : 아규먼트를 리스트로 입력해야한다.
 */
function multiply(x,y,z) {
    return `${this.name} / 결과값 : ${x*y*z}`;
}
console.log(multiply.call(yuJin3, 3,4,5));
console.log(multiply.apply(yuJin3, [3,4,5]));

/**
 * bind()
 * : this 바인딩만 해놓고 나중에 실행할 수 있음
 * : 위에 두개는 호출 시 바로 실행됨
 */
const laterFunc = multiply.bind(yuJin3,3,4,5);
console.log(laterFunc);
console.log(laterFunc());