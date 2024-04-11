// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// console.log(1);


// setTimeout(() => {
//     console.log(2);
// })

// console.log(3);


// function sum(a, b){
//     return a + b;
// }

// console.log(sum(1,2));


function sum(a, b){
    return new Promise((resolve, reject) => {
        if(a > 0){
            resolve(a + b);
        }else {
            reject("Error happened");
        }
    })
}

// console.log(sum(1,2));
// sum(-1,2).then(result =>{
//     console.log(result);
// }).catch(error =>{
//     console.log(error);
// })

// sum(2,3).then(result => {
//     console.log(result);
//     return result + 2;
// }).then(result => {
//     console.log(result);
// });
sum(2,3).then(result => {
    console.log(result);
    return sum(10,20);
}).then(result => {
    console.log(result);
});