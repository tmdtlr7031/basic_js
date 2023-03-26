/**
 * 1) 데이터 프로퍼티 : 키와 값으로 이뤄진 실질적 값을 가지고있는 프로퍼티
 * 2) 액세서 프로퍼티 : 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 (getter, setter)
 */

const yuJin = {name : '안유진', year : 2003};

/**
 * 1) value - 실제 프로퍼티 값
 * 2) writable - 값을 수정할 수 있는지 여부. false = 값 수정 불가
 * 3) enumerable - 열거 가능한지 여부. for..in 루프 등을 사용할 수 있으면 true
 * 4) configurable - 프로퍼티 어트리뷰트 재정의가 가능한지 여부. false 면 프로퍼티 삭제, 어트리뷰트 변경이 금지됨. 
 *                   단, writable = true인 경우 값변경 + writable 변경하는건 가능 (writable = false -> true로 변경은 불가능)
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

console.log(Object.getOwnPropertyDescriptors(yuJin));

console.log('-------------------------');

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

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

// 액세서 프로퍼티 : value라는 프로퍼티가 없다.
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// 프로퍼티 어트리뷰트까지 설정가능 (디폴트는 모두 false)
// 단, yuJin2['height'] = 172; 이렇게 추가한 경우 디폴트는 모두 true
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('-------------------------');
console.log('------------- writable -----------');
// writable 테스트
yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
    writable : false,
});

yuJin2.height = 170;
console.log(yuJin2);

console.log('------------- enumerable -----------');
// enumerable 테스트
console.log(Object.keys(yuJin2));

Object.defineProperty(yuJin2, 'name', {
    enumerable : false,
});

console.log(Object.keys(yuJin2));
console.log(yuJin2); // 나오진 않지만 실제 값이 사라지진 않음
console.log(yuJin2.name);

console.log('------------- configurable -----------');
// configurable
Object.defineProperty(yuJin2, 'height', {
    writable : true,
    configurable : false,
});

// writable = true라서 configurable : false라도 값은 변경가능
Object.defineProperty(yuJin2, 'height', {value: 170});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable : false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable : false로 인한 오류 발생
Object.defineProperty(yuJin2, 'height', {
    enumerable: false,
});
