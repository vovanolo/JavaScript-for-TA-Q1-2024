// цикли

// while

// початкове значення
// умова
// крок циклу
// while(умова){
//     код
// }


// let i = 0;

// while (i <= 10){
//     console.log(i); // 2 3 4 5 6 7 8 9 10
//     i++; // 11
// }

// for

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 20; i+=3){
//     console.log(i);
// }

// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }

const numbers = [1,2,3,4,5,6,7,8,9,10];


// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for(let i = 0; i < numbers.length; i+=2){
//     console.log(numbers[i]);
// }

// for of, for in

// for (let element of numbers){
//     console.log(element);
// }

// for(let index in numbers){
//     // console.log(index);
//     console.log(numbers[index]);
// }

// break, continue

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     if(numbers[i] === 5){
//         break;
//     }
// }

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 5){
//         continue;
//     }
//     console.log(numbers[i]);
// }
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 5){
//         numbers[i] = 15;
//     }
//     console.log(numbers[i]);
// }

// console.log(numbers)



// function назва(аргументи){
//     код
// }

// function sayHello(){
//     console.log("Hello!");
// }

// sayHello();
// sayHello();



// function sum(a, b){
//     let c = 10;
//     console.log(a + b * c);
// }

// sum(10, 5);

// sum(20, 30);

// sum("sfsdf", 'sfsfs');

// return

// function sum(a, b){
//     return a + b;
// }

// // console.log(sum(2, 4));
// let result = sum(2, 4);

// console.log(result);

// масив - arguments

// function sum(){
//     console.log(arguments);
// }

// sum(2,4,5,6,3,2,4,56,5,3,2);

// function sum(){
//     let sum = 0;
//     for(let element of arguments){
//         sum += element;
//     }
//     return sum;
// }

// console.log(sum(2,4,5,6,3,2,4,56,5,3,2));

// 1 - function declaration
// 2 - function expression

// 1 - function declaration
// declaration();

// expression();


// function declaration(){
//     console.log("declaration");
// }

// 2 - function expression
// let expression = function(){
//     console.log("expression");
// }


// let a = 1;

// a++;
// a+=1;

// a = a + 1;