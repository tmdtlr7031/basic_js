/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// push
console.log(iveMembers.push('멤버추가')); // 추가 후 array 길이를 반환
console.log(iveMembers);

console.log('------------------');

// pop
console.log(iveMembers.pop()); // array의 마지막 요소 반환 후 array에서 삭제
console.log(iveMembers);

console.log('------------------');

// shift
console.log(iveMembers.shift()); // array의 첫번째 요소 반환 후 array에서 삭제
console.log(iveMembers);

console.log('------------------');

// unshift
console.log(iveMembers.unshift('안유진')); // array의 첫번째에 추가 후 array 길이 반환
console.log(iveMembers);

console.log('------------------');

// splice
console.log(iveMembers.splice(0,3)); // 시작 index, 몇개까지 자르고, 자른 array 반환
console.log(iveMembers);

console.log('==================================');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// concat
console.log(iveMembers.concat('멤버추가')); // 기존 array를 오염하는것 없이 '멤버추가' 된 새로운 array 반환
console.log(iveMembers);

console.log('------------------');

// slice
console.log(iveMembers.slice(0,3)); // 시작 index, 종료 index(해당 인덱스 전까지 잘림)
console.log(iveMembers);

console.log('------------------');

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2); // let iveMembers2 = [iveMembers]; 해당 구문과 결과가 다름

let iveMembers3 = iveMembers;
console.log(iveMembers2 === iveMembers); // spread한 결과는 완전히 새로운 array
console.log(iveMembers3 === iveMembers);

// join
console.log('------------------');
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(''));

console.log('------------------');

// sort
iveMembers.sort(); // 오름차순
console.log(iveMembers);

console.log(iveMembers.reverse()); // 내림차순, 내림차순된 array 반환 + 기존 array 변경됨

// sort 커스텀
let numbers = [1,9,7,5,3];

/**
 * a, b를 비교했을때
 * 1) a를 b보다 뒤로가게 하려면 0보다 큰 숫자 반환
 * 2) a를 b보다 앞으로가게 하려면 0보다 작은 숫자 반환
 * 3) 원래 정의된 순서로 두려면 0을 반환
 */
numbers.sort((a,b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

// map
// 모든 요소를 순회하며 새로운 array 반환
console.log(iveMembers.map((x) => `ive ${x}`));
console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `ive ${x}`;
    } else {
        return x;
    }
}));

// filter
numbers = [1,8,7,6,3];
console.log(numbers.filter((x) => x < 4)); // 필더링된 array 반환

// find
console.log(numbers.find((x) => x < 4)); // 해당하는 가장 첫번째 값을 반환

// findIndex
console.log(numbers.findIndex((x) => x < 4)); // 해당하는 가장 첫번째 요소의 index 반환

// reduce
console.log(numbers.reduce((p, n) => p+n, 0)); // 0은 처음 시작할 값