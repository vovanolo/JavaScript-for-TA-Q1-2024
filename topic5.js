// const user = {
//     name: 'John',
//     city: "Lviv",
//     age: 35
// }

// cosnt object = {
//     key: value
// }

// console.log(user)
// console.log(user.name);
// console.log(user.age);

// user.name = "Peter";

// delete user.age;

// user.age = null;

// user.status = "active";

// console.log(user);


// const user = {
//     name: 'John',
//     city: "Lviv",
//     age: 35,
//     friends: [{
//         name: 'Mike',
//         age:24,
//     }, {
//         name: 'Jack',
//         age: 38,
//     }],
//     son: {
//         name: "Vasyl",
//         age: 10
//     }
// }

// console.log(user);

// console.log(user.son.name);
// console.log(user.friends[0].name);

// const user = {
//     name: 'John',
//     city: "Lviv",
//     age: 35
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));


// const user = {
//     name: 'John',
//     city: "Lviv",
//     age: 35,
//     // showName: function(){
//     //     console.log(user.name);
//     // } - bad practice
//     showName: function(){
//         console.log(this.name);
//     } - best practice
// }

// user.showName();

// фукнція конструктор
// класи - функція конструктор

// function User(name, city, age){
//     this.name = name;
//     this.city = city,
//     this.age  = age;
//     this.showName = function(){
//         console.log(this.name);
//     }
// }

// let user1 = new User("John", "Lviv", 23);
// let user2 = new User("John2", "Lviv2", 25);

// user1.showName();
// user2.showName();

// User.showName();
// console.log(user1);
// console.log(user2);

// class User{
//     constructor(name, city, age){
//         this._name = name,
//         this.city = city,
//         this.age = age;
//     }

//     showName(){
//         console.log(this.name);
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 4){
//             console.log("Name must have at least 4 char");
//             return;
//         }
//         this._name = value;
//     }

// }

// let user1 = new User("John", "Lviv", 23);
// console.log(user1);
// user1.showName();

// let user1 = new User("John", "Lviv", 23);

// user1.name = "Peter";

// console.log(user1.name);