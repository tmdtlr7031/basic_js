/**
 * async / await
 */
const getPromise = (second) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('완료');
        reject('에러');
    }, second*1000);
})

async function runner() {
    try {
        const result1 = await getPromise(1); // promise 함수만 await 가능
        console.log(result1);

        const result2 = await getPromise(1);
        console.log(result2);    
    } catch (e) {
        console.log('----- catch e -----')
        console.log(e);
    } finally {
        console.log('----- finally -----')
    }
}

runner();


