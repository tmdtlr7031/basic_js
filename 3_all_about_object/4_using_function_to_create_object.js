/**
 * 생성자 합수
 */

function IdolModel(name, year) {
    // new 썼는지 확인 -> 안썼으면 undefined 출력
    // console.log(new.target);
    if (!new.target) {
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

// ***** 이렇게 쓰지 않도록 주의하라는 것...!! *****
// new 안쓰면 반환값이 없기때문에 undefined
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);

// global == 웹에서는 window 느낌.
// new 안붙이고 실행하면 this 키워드가 global을 가르키게 됨
console.log(global.name);

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};
console.log(new IdolModelArrow('안유진', 2003));