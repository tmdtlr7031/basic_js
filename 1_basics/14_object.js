/**
 * 객체 Object
 */
let yuJin = {
    name : '안유진',
    group : '아이브',
    dance : function() { // 객체에 종속되기 때문에 메서드, 밖에있으면 함수
        return `${this.name}이 춤을 춥니다.`;
    }
}

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

console.log('---------------------------------');
// ---------------------------------

const nameKey = 'name';
const nameValue = '안유진';
const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]:nameValue,
    [groupKey]:groupValue,
    dance: function() {
        return `${this.name} 이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['english'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['english']; // 해당 요소 삭제
console.log(yuJin2);

/**
 * 객체의 특징
 * 1) const 선언할 경우 객체 자체를 변경할 수 없다.
 * 2) 객체안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name : '장원영',
    group : '아이브',
}
console.log(wonYoung);

// wonYoung = {}; 1) 해당하는 케이스
wonYoung['group'] = '코드팩토리'; // 2) 케이스
console.log(wonYoung);

console.log('---------------------------------');
// ---------------------------------

//모든 키 값 다 가져오기
console.log(Object.keys(wonYoung));

//모든 value 값 다 가져오기
console.log(Object.values(wonYoung));

// 보다 빠르게 객체 선언하기
const name = '안유진';
const yuJin3 = {name}; // name = '얀유진'에서 name을 키값, '안유진'을 value값으로 쓰는 것
console.log(yuJin3);