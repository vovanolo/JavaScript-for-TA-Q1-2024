// let x = 10;
// let y = 20;
// let z = x + y;


// for(let i = 0; i < 10; i++) {
//     console.log(10);
// }


// Syntax error

// console.log(;

// Reference error

// pritMe();

// Logical Error

// 2 + 3 = 4

// try{

// }catch(error){

// }

// try{
//     console.log("try section");
// }catch(error){
//     console.log("error catched");
// }

// try{
//     console.log("try section");
//     printMe();
// }catch(error){
//     console.log("error catched");
// }

// try{
//     printMe();
//     console.log("try section");
// }catch(error){
//     console.log("error catched");
// }

// try{
//     printMe();
//     console.log("try section");
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);


// }

// new Error();
// new SyntaxError()


// throw

// try{
//     let age = +prompt("How old are you?");
//     if(age < 18){
//         throw new Error("Age must be > 18");
//     }else{
//         console.log("Welcome!");
//     }
// }catch(error){
//     console.log(error.message);
// }

// class AgeError{
//     constructor(message){
//         this.name = "Age Error";
//         this.message = message;
//     }
// }

// try{
//     let age = +prompt("How old are you?");
//     if(age < 18){
//         throw new AgeError("Age must be > 18");
//     }else{
//         console.log("Welcome!");
//     }
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }

// forEach map reduce filter ....

// let students = ["Ivan", "John", "Sophia", "Peter", "Petro", "Vasyl"];

// students.forEach(function(element, index){
//     // console.log(element);
//     console.log(index);
// })

// students.map(function(element, index){
//     console.log(element);
// })

// let newStudents = students.map(function(element, index){
//     // return element + "2";
//     if(index === 1 || index === 3){
//         return element + "2";
//     }
//     return element;
// })

// console.log(newStudents)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.reduce(function(sum, element){
//     console.log(element);
// }, 0);


// let result = numbers.reduce(function(sum, element){
//     return sum + element;
// }, 0);

// console.log(result);

// let filteredNumbers = numbers.filter(function(element){
//     return element > 4;
// })

// console.log(filteredNumbers);

let str = "some string";

console.log(str.length);