// let images = document.getElementsByClassName("oldImg");
// for(let i=0;i<images.length;i++){
//     images[i].src = "spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

// console.dir(document.querySelector("p"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll(".box a"));

// let tags = document.querySelectorAll(".box a");

// for(let i=0;i<tags.length;i++){
//     tags[i].style.color = "purple";
// }

// for(tag of tags){
//     tag.style.color = "green";
// }

// let p = document.createElement("p");
// p.innerText = "Hey I'm red!";
// // p.style.color = "red";
// p.classList.add("red");
// document.querySelector("body").prepend(p);

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// // h3.style.color = "blue";
// h3.classList.add("blue");
// document.querySelector("body").prepend(h3);

// let div = document.createElement("div");
// // div.style.backgroundColor = "pink";
// div.classList.add("box");

// let h1 = document.createElement("h1");
// h1.innerText = "I'm in a div";

// let p2 = document.createElement("p");
// p2.innerText = "ME TOO";
// document.querySelector("body").prepend(div);

// div.appendChild(h1);
// div.appendChild(p2);

// let input = document.createElement("input");
// let button = document.createElement("button");
// button.innerText = "Click me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// input.setAttribute("placeholder","username");
// button.setAttribute("id","btn");

// let btn = document.querySelector("#btn");
// btn.classList.add("btnstyle");

// let h1 = document.createElement("h1");
// h1.innerText = "DOM Practice";
// h1.classList.add("h1style");

// document.querySelector("body").append(h1);

// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("you entered a button");
//     }
//     console.dir(btn);
// }

// btn.onclick = function() {
//     alert("button was clicked");
// }

// function sayHello() {
//     alert("Hello!");
// }

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//          console.log("you double clicked me");
//     });
// }

// function sayHello() {
//     alert("Hello!");
// }
// function sayName() {
//     alert("Apna College");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click",function() {
//     let randomColor = getRandomColor();
//     let h3 = document.querySelector("h3");
//     h3.innerText = randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red} , ${green} , ${blue})`;
//     return color;
// }

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("Para was clicked");
// })

// let div = document.querySelector("div");

// div.addEventListener("mouseenter",function(){
//     console.log("Div was hovered");
// })

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// p.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// h1.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// h3.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button Clicked");
// })

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("Button Clicked");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// })

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code : ",event.code);
//     if(event.code == "KeyU"){
//         console.log("character moves forward");
//     }
//     else if(event.code == "KeyD"){
//         console.log("character moves backward");
//     }
//     else if(event.code == "KeyL"){
//         console.log("character moves left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("character moves right");
//     }
// })

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("form submitted");
// })

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// })

// form.addEventListener("submit",function(event){
//     event.preventDefault();

    // console.dir(form);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi your name is ${user.value} and your password is set to ${pass.value}`);
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// })

// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value : ",this.value);
// })


// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value : ",this.value);
// })

// let inp = document.querySelector("#text");
// let para = document.querySelector("p");
// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     para.innerText = inp.value;
// })

// let images = document.querySelectorAll("img");
// let index = 0;

// function showNextImage() {
//     // Hide all images
//     images.forEach(img => img.style.display = "none");

//     // Show the current image
//     images[index].style.display = "block";

//     // Move to the next image (loop back if at the end)
//     index = (index + 1) % images.length;
// }

// // Initialize: Hide all images except the first one
// images.forEach(img => img.style.display = "none");
// images[0].style.display = "block";

// // Start the interval
// setInterval(showNextImage, 2000);

// let images = document.querySelectorAll("img");
// let index = 0;

// function nextImage() {
//     images.forEach(img => img.style.display = "none");
//     images[index].style.display = "block";
//     index = (index + 1) % images.length;
// }

// images.forEach(img => img.style.display = "none");
// images[0].style.display = "block";

// setInterval(nextImage,5000);

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.style.color = "green"
// })

// let inp = document.querySelector("input");
// let h1 = document.querySelector("h1");

// inp.addEventListener("input",function(){
//     h1.innerText = this.value.replace(/[^a-zA-Z\s]/g, '');
// })

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div is clicked");
// })

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul is clicked");
// })

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

// let inp = document.querySelector("input")
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click",function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";
// })

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

// let box = document.querySelector("div");
// box.addEventListener("mouseout",function(){
//     box.style.color = "green";
// })

// let inp = document.querySelector("input");
// inp.addEventListener("keypress",function(){
//     inp.style.color = "red";
// })

// let para = document.querySelector("p");
// para.addEventListener("scroll",function(){
//     console.log("scrolled your content");
// })

// window.addEventListener("load",function(){
//     console.log("page loaded successfully");
// })

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par = this.parentElement;
        par.remove();
    })
}
