/**
 * 클로저
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다. --> 어렵다
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우가 closure라고 한다. --> 일단 이렇게 이해하고 간다
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber(); // 함수가 리턴됐기 때문에 하위 함수가 오래살아있는건 아니다
}

// console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }
    return innerGetNumber; // 함수 자체를 반환
}

const runner = getNumber(); // getNumber 함수가 종료가 된 상황
console.log(runner()); // 종료된 이후에 안쪽 함수를 실행하는데 실행이 됨. 클로저...

/**
 * 언제쓰나?! 
 * 
 * 1) 데이터 캐싱
 */
function cacheFunction(newNumb) {
    var number = 10 * 10; // 해당 계산식이 6시간 걸린다 가정
    return number * newNumb;
}
// 호출할때마다 계속 계산하면..비효율
// console.log(cacheFunction(10)); 
// console.log(cacheFunction(20));

//------ TO BE ------

function cacheFunction() {
    var number = 10 * 10; // 해당 계산식이 6시간 걸린다 가정

    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }

    return innerCacheFunction;
}

// number 계산식 결과를 들고있고 newNumb만 곱하기 때문에 빠름
const runner2 = cacheFunction();
console.log(runner2(10)); 
console.log(runner2(20));


/**
 *  2) 반복적으로 특정값을 변경할 때
 */
function cacheFunction2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

// number 기억해서 호출할때마다 ++ 됨
const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function() {
        return `안녕하세요. 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());
console.log(yuJin._year); // 접근 불가 (this 키워드로 받지않았기 때문..)
