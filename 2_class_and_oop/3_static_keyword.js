class IdolModel {
    name;
    year;
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // 메서드에서도 static 이용가능
    static returnGroupName() {
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // static 키워드 붙은건 인스턴스에 귀속되지 않음

console.log(IdolModel.groupName); //클래스 자체에 귀속됨
console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel2 (object.name, object.year);
    }

    static fromList(list) {
        return new IdolModel2(list[0], list[1]);
    }
}

const yuJin2 = IdolModel2.fromObject({name:'안유진', year:2003});
console.log(yuJin2);

const yuJin3 = IdolModel2.fromList(['안유진', 2003]);
console.log(yuJin3);