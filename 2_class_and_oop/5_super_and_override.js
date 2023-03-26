class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요. ${this.name} 입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    part;

    // 생성자 오버라이드
    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    // constructor가 아닌곳에선 this 써야함. (super.name 이 아닌 this.name)
    // 단, super로 함수는 호출 할 수 있다.
    sayHello() {
        // return `안녕하세요. ${this.name} 입니다. ${this.part} 를 맡고 있습니다.`;
        return `${super.sayHello()} ${this.part} 를 맡고 있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '춤');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());