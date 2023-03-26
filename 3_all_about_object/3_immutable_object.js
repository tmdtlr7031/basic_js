const yuJin = {
    name : '안유진', 
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

/**
 * Extensible (확장 가능한지)
 */
console.log(Object.isExtensible(yuJin)); // default = true
yuJin['position'] = 'vocal';
console.log(yuJin);

// false 변경 - 에러는 안나지만 추가는 안됨 (삭제는 됨)
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
console.log(yuJin); 

console.log('-------------------- Seal --------------------');
/**
 * Seal
 * - 전 강의의 configurable = false 로 만듦 + 추가/삭제 불가 (단, 추가/삭제가 적용이 안돼도 에러를 뱉지는 않음)
 */
const yuJin2 = {
    name : '안유진', 
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};
console.log(Object.isSealed(yuJin2)); // default = false

// true
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    value : '코드펙토리',
    // writable : false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('-------------------- Freezed --------------------');
/**
 * Freezed (-> 읽기 외에 모든걸 불가능하게 만든다.)
 */
const yuJin3 = {
    name : '안유진', 
    year : 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};
console.log(Object.isFrozen(yuJin3)); // default = false

// true
Object.freeze(yuJin3);

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name')); // enumerable 뺴고 false

// 에러뱉음
// Object.defineProperty(yuJin3, 'name', {
//     value : '코드펙토리',
// });

// 상위 freeze 하면 중첩된 객체는? false!
const yuJin4 = {
    name : '안유진',
    year : 2003,
    wonYoung : {
        name : '장원영',
        year : 2002,
    }
};

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4.wonYoung));

/**
 * Extensible, Seal, Freezed 전부 다 
 * 내부 객체까지 적용하려면 재귀함수를 따로 만들어서 적용하거나 등등.. 해줘야함.
 */