/**
 * Callback
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

function waitAndRun2() {
    setTimeout(() => {
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}
// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((res)=>{
//    console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

// getPromise(1).then((res)=>{
//     console.log('----- first then -----');
//     console.log(res);

//     return getPromise(1); // 다음 콜백을 호출하고 싶을땐 return promise 함수하고 밖에서 then 추가
// }).then((res)=> {
//     console.log('----- second then -----');
//     console.log(res);
// })
// ;

// reject 이용
const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('완료');
    }, seconds * 1000);
});
// getPromise2(1).then((res)=>{
//     console.log('----- first then -----');
//     console.log(res);
// })
// .catch((res)=>{
//     console.log('----- first catch -----');
//     console.log(res);
// }).finally(()=>{
//     console.log('----- first finally -----');
// });

/**
 * promise 동시에 실행
 * - 가장 느린 함수 기준으로 동시에 실행된다
 */
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});