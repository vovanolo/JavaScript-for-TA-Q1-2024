// const mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// console.log(Object.getOwnPropertyNames(mentor));

// console.log(window.innerHeight);
// console.log(window.innerWidth);


// let newWindow = window.open("", "", "width=300, height=300, top=200, left=200");

// newWindow.resizeTo(400, 400);



// newWindow.moveTo(500, 500);

// newWindow.close();

// function handleClick(){
//     console.log("element was clicked");
// }

// let title = document.querySelector(".title");

// title.onclick = function(){
//     console.log("element was clicked");
// }

// title.addEventListener("click", function(){
//     console.log("element was clicked");
// })

// function handleClick(){
//     console.log("element was clicked");
// }

// title.addEventListener("click", handleClick);


// title.addEventListener("click", function(event){
//     // console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// })

// title.addEventListener("click", function(event){
//    event.target.style.color = 'red';
// })

// function eventHandler(event){
//     if(event.type === "click"){
//         console.log("element was clicked");
//     }
//     if(event.type === "mouseover"){
//         console.log("mouse on element");
//     }
// }

// title.addEventListener("click", eventHandler);

// title.addEventListener("mouseover", eventHandler);
// let title = document.querySelector(".title");

// let btn = document.querySelector(".btn");

// let login = document.querySelector(".login");


// btn.addEventListener("click",function(){
//     title.style.color = "green";
// })

// btn.addEventListener("click",function(){
//     console.log(login.value);
// })

// let registerForm = document.querySelector("#registerForm");
// let result = document.querySelector(".result");

// registerForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log('form was submitted');
//     console.log(event.target.elements.login.value);
//     console.log(event.target.elements.password.value);

//     result.innerHTML = `
//     <h1>Welcome, your login is ${event.target.elements.login.value}</h1>
//     <h1>Your password is ${event.target.elements.password.value}</h1>
//     `
// })

// setTimeout(function(){
//     console.log('result after 4 sec');
// }, 4000);

