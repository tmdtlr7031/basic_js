/**
 * 상속
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

// 해당 클래스의 생성자가 없어도 부모의 생성자 이용 -> 생성자도 상속받음
const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);