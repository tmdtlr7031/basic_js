/**
 * Class KeyWord
 */
class IdolModel {
    // 프로퍼티를 안써도 실행이됨;; 
    name;
    year;

    // constructor 생성자
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 클래스 안에서는 메서드 이름을 바로 입력 (function 안써도..)
    sayName() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin.sayName());
console.log(typeof IdolModel); // *** 클래스는 함수다! ***
console.log(typeof yuJin); // *** 클래스로 생성한 건 객체다! ***