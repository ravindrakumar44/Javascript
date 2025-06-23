// function hello() {
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// demo();

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         },delay);
//     })
// }

// async function demo() {
//     try{
//         await changeColor("red",1000);
//         await changeColor("orange",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//     }
//     catch(err){
//         console.log("error caught");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log("new number : ",a + 3);
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// })

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     })
// })

// function savetoDb(data,success,failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetoDb(
//     "apna college",
//     ()=>{
//         console.log("success : your data was saved");
//         savetoDb(
//             "hello world",
//             ()=>{
//             console.log("success2 : data2 saved");
//             savetoDb(
//                 "shradha",
//                 ()=>{
//                 console.log("success3 : data3 saved");
//                 },
//                 ()=>{
//                     console.log("failure3 : weak connection");
//                 }
//             );
//             },
//             ()=>{
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     ()=>{
//         console.log("failure : weak connection, data not saved");
//     }
// );
   
// function savetoDb(data) {
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         }
//         else{
//             reject("failure : weak connection");
//         }
//     })
// }

// savetoDb("apna college")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log(result);
//     return savetoDb("hello world")
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log(result);
//     return savetoDb("shradha")
// })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise rejected");
//     console.log(error);
// })

// async function greet() {
//     throw "weak connection";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was : ",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err : ",err);
// })

// let demo = async () => {
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();
// }

// let JsonRes = '{"fact":"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible.","length":111}';
// let validRes = JSON.parse(JsonRes);
// console.log(validRes);
// console.log(validRes.fact);

// let student = {
//     name : "ravindra",
//     marks : 93,
// };

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// })

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e) {
//         console.log("error - ",e);
//     }

// }

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// })

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//                 let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e) {
//         console.log("ERROR - ",e);
//     }

//     console.log("bye");
// }
  
// let btn = document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e) {
//         return "No fact found";
//     }
// }

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async function(){
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
// })

// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(e){
//         console.log("error -",e);
//         return "/";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colArr = await getColleges(country);
//     show(colArr);
// })

// function show(colArr){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         console.log(col.state);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     }
//     catch(e) {
//         console.log("error : ",e);
//         return [];
//     }
// }

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log(data1.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e) {
//         console.log("Error : ",e);
//     }
// }

// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch {
//         console.log("ERROR - ",e);
//         return "No fact found";
//     }
// }

// let url = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
// })

// async function getImage() {
//     try {
//         let res = await axios.get(url);
//         return res.data.message;
//     }
//     catch(e) {
//         console.log("ERROR - ",e);
//         return "/";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let country = document.querySelector("input").value;
//     // console.log(country);

//     let colArr = await getColleges(country);
//     show(colArr);
// })

// function show(colArr){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         // console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     }
//     catch(e) {
//         console.log("error : ",e);
//         return [];
//     }
// }

// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// }) 

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e) {
//         console.log("error - ",e);
//         return "No data found"
//     }
// }   

// let url = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
// })

// async function getImage() {
//     try {
//         let res = await axios.get(url);
//         return res.data.message;
//     }
//     catch(e) {
//         console.log("error",e);
//         return "/";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         let config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data.joke);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let country = document.querySelector("input").value;
//     let colArr = await getColleges(country);
//     show(colArr);
// })

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try{
//         let res = await axios.get(url+country);
//         return res.data;
//     }
//     catch(e) {
//         console.log("error : ",e);
//         return [];
//     }
// }

let url = "http://universities.hipolabs.com/search?country=india&name="
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let state = document.querySelector("input").value;
    let colArr = await getColleges(state);
    show(colArr);
})

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(state){
    try{
        let res = await axios.get(url+state);
        return res.data;
    }
    catch(e) {
        console.log("Error : ",e)
        return [];
    }
}

