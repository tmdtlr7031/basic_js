var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}

// levelOne();

// 기존 levelOne 덮어쓰기
function levelOne() {
    var numberOne = 40;
    console.log(numberOne); // 가장 가까운 스코프를 가져옴
}

// levelOne();
console.log(numberOne); // 기존 값(1번라인)이 변경되지는 않음

// "가장 가까운 스코프부터 접근한다" 증명
function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

// levelOne();
// console.log(numberTwo); // 하위 스코프에는 접근 불가

/**
 * JS -> 렉시컬 스코프 (Lexical Scope)
 * : 선언된 위치가 상위 스코프를 정한다
 * 
 * 반대개념 => 다이나믹 스코프 (Dynamic Scope)
 * : 실행한 위치가 상위 스코프를 정한다
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function functionTwo() {
    console.log(numberThree);
}

functionOne(); // 38라인에서 가져옴. 다이나믹스코프였으면 100이 나왔을 것

// 힘수(function)를 제외한 for, if문 등에선 var 사용 시 새로운 스코프를 만들어내지 않음
// 따라서 for문에서 i가 변경됨
var i = 999;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`);

// let 키워드쓰면 블록 레벨 스코프(block level scope)
i = 999;
for (let i = 0; i < 10; i++) {
    console.log(i);  
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */