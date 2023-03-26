/**
 * 객체를 선언할 때 사용할 수 있는 방법
 * 1) object 이용하여 객체 생성 - {}
 * 2) class 인스턴스화해서 생성 - class , oop
 * 3) function 사용해서 객체 생성
 */

// 1)
const yuJin = {name : '안유진', year : 2003};
console.log(yuJin);

// 2)
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

// 3) 생성자 함수
// function 에서 this 키워드를 사용해야만 new 로 호출가능
// 프로퍼티가 없어도 동작함 -> class에서 프로퍼티 없어도 동작하는 것과 같은 맥락.
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);