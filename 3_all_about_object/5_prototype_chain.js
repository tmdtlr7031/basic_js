/**
 * 프로토타입
 */
const testObj = {};

// __proto__  : 모든 객체에 존재하는 프로퍼티
// class 에서 부모 클래스에 해당하는 값
console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);
console.dir(IdolModel.prototype, {
   showHidden : true, 
});

// 순환참조
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype); 

console.log(IdolModel.__proto__ === Function.prototype); 
console.log(Function.prototype.__proto__ === Object.prototype); 
console.log(IdolModel.prototype.__proto__ === Object.prototype); 

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // 같은 기능이지만 다른 메모리에 올라감
console.log(yuJin2.hasOwnProperty('sayHello')); // true == yuJin2 만의 고유한 함수다.

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);
console.log(yuJin3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello);
console.log(yuJin3.hasOwnProperty('sayHello')); // false : 상속받은 것이다 유추 가능

// 그럼 static은 어케함?
IdolModel3.sayStaticHello = function() {
    return '스태틱 메서드입니다.';
}
console.log(IdolModel3.sayStaticHello());

/**
 * 오버라이딩
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    // override (== 프로퍼티 셰도잉)
    this.sayHello = function() {
    return `안녕하세요. 저는 instance 메서드입니다!`;    
    }
}

IdolModel4.prototype.sayHello = function() {
    return `안녕하세요. 저는 prototype 메서드입니다!`;
}

const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function() {
 return `${this.name}이 인사를 합니다.`;   
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) == IdolModel.prototype); // Object.getPrototypeOf(gaEul) : gaEul의 proto가져옴

console.log(Object.getPrototypeOf(ray) == FemaleIdolModel.prototype);

// 인스턴스는 프로토를 바꿀 수 있다...
Object.setPrototypeOf(ray, IdolModel.prototype);

console.log(Object.getPrototypeOf(ray));
console.log(ray.sayHello());
console.log(ray.constructor); // constructor 도 변경된다.
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // FemaleIdolModel 자체의 prototype이 변한게 아니라 ray 인스턴스에서 __proto__ 연결이 끊어진 것

// 함수의 prototype 변경
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);

// 131 에서 변경했는데 false가 안나오네? -> FemaleIdolModel 함수의 prototype 참조 자체가 IdolModel.prototype 변경되었기 때문에 양쪽다 IdolModel을 가리킴
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);