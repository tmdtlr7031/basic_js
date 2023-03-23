class IdolModel {
    // 프로퍼티를 안써도 실행이됨;; 
    name;
    year;

    // constructor 생성자
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    // 보통 바꾸고싶은 변수명하고 naming 통일 시킴
    set name(name) {
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); // 변수처럼 사용

// name이 private이면 set 없이는 불가능
yuJin.name = '장원영';
console.log(yuJin);

console.log('------------------------------');

class IdolModel2 {
    // private은 앞에 #
    // ES7 에서 지원
    #name; 
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);