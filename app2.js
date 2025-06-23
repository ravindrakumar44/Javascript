// console.log("Hi there!");

// let id = setInterval(() => {
//     console.log("Apna College");
// },2000);
// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello World");
// },3000);
// console.log(id2);

// const student = {
//     name : "ravindra",
//     marks : 95,
//     prop: this,
//     getName : function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks : () => {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout(() => {
//             console.log(this)
//         },2000);
//     },
//     getInfo2: function() {
//         setTimeout( function() {
//             console.log(this)
//         },2000);
//     }   
// };

// console.log(student.getName());
// console.log(student.getMarks());

// const square = (a) => (a*a);
// console.log(square(4));

// const square2 = (a) => {
//     console.log(a*a);
// }
// square2(5);

// let id = setInterval(() => {
//     console.log("Hello World");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("cleared interval");
// },10000);

// arrayAverage = (arr) => {
//    let sum = 0;
//    for(number of arr){
//     sum = sum + number;
//    }
//    return sum / arr.length;
   
// }

// let arr = [2,3,4,5,6];
// console.log(arrayAverage(arr));

// let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

// let students = [{
//     name:"ravi",
//     marks:75
// },
// {
//     name:"kumar",
//     marks:75
// },
// {
//     name:"raj",
//     marks:70
// }];

// let gpa = students.map((el) => {
//     return el.marks/10;
// })

// arr.forEach((student) => {
//     console.log(student.marks);
// })

// let num = [1,2,3,4];
// let double = num.map((el) => {
//     // return el*el;
// });

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num) => {
//     return num % 2 == 0;
// })


// let nums = [2,4,6,7];
// let even = nums.some((el) => {
//     return el%2==0;
// })

// let arr = [1,2,3,4,5];

// function print(el) {
//     console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el) => {
//     console.log(el);
// })

// arr = [{
//     name : "ravi",
//     marks : 94,
// },
// {
//     name : "kumar",
//     marks : 93,
// },
// {
//     name : "raj",
//     marks : 98,
// }]

// arr.forEach((student) => {
//     console.log(student.age);
// })

// let num = [1,2,3,4,5];
// let double = num.map(function(el){
//     return el * el;
// });
// console.log(double);

// let gpa = arr.map((el) => {
//     return el.marks / 10;
// })
// console.log(gpa);

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((el) => {
//     return el % 2 == 0;
// })
// console.log(even);

// let ans = nums.some((el) => {
//     return el % 2 == 0;
// })
// console.log(ans);

// let nums2 = [2,4,6];
// let ans2 = nums2.every((el) => {
//     return el % 2 == 0;
// })
// console.log(ans2);

// let arr = [1,2,3,4];
// let ans = arr.reduce((res,el) => {
//     console.log(res);
//     return res+el
// });
// console.log(ans);

// let arr = [2,3,4,5,3,4,7,8,1,20];
// let ans = arr.reduce((max,el) => {
//     if(el > max){
//         max = el;
//     }
//     return max;
// });
// console.log(ans);

// let nums = [2,3,,45,4,6,1];
// let ans = nums.reduce((min,nums) => {
//     if(nums < min){
//         min = nums;
//     }
//     return min;
// });
// console.log(ans);

// let nums2 = [10,20,30,40,50];
// let ans2 = nums2.every((el) => el % 10 == 0);
// console.log(ans2);

// function sum(a,b=3){
//     return a+b;
// }
// console.log(sum(2));

// let arr = [1,2,3,4,5];
// console.log(...arr);
// console.log(..."apnacollege");

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...even,...odd];
// console.log(nums);

// let data = {
//     email : "ironman@gmail.com",
//     password : "abcd",
// };
// let dataCopy = {...data,id : 123};
// console.log(dataCopy);

// let arr = [1,2,3,4,5];
// let obj1 = {...arr};
// console.log(obj1);

// let obj2 = {..."hello"};
// console.log(obj2);

// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us : "+args[i]);
//     }
// }

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

// function sum(...args) {
//     return args.reduce((sum,el) => sum + el);
// }

// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el) => {
//         if(el < min){
//             min = el;
//         }
//         return min;
//     });
// }

// let names = ["tony","bruce","steve","peter"];
// let [winner,runnerup, ...others] = names;
// console.log(winner,runnerup);

// const student = {
//     name : "ravindra",
//     class : 14,
//     age : 18,
//     city : "Pune",
// };
// const {name : user,class : standard,city : place} = student;
// console.log(user);

// let arr = [1,2,3,4,5];
// let square = arr.map((el) => {
//     return el * el;
// });
// console.log("Square : ", ...square);

// let sum = arr.reduce((add,el) => add+el);
// console.log("Sum : ",sum);
// console.log("Average : ",sum/arr.length);

// let arr2 = [5,10,15,20,25];
// let ans = arr2.map((el) => {
//     return el + 5;
// });
// console.log("Adding 5 : ", ...ans);

// let arr3 = ["apnacollege"];
// let ans2 = arr3.map((el) => {
//     return el.toUpperCase();
// });
// console.log(...ans2);

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((el) => el * 2),
// ];

// console.log(doubleAndReturnArgs([1,2,3],4,4));
// console.log(doubleAndReturnArgs([2],10,4));

// const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});
// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));

// function hello(){
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// setTimeout(()=>{
//     console.log("apna college");
// },2000);
// console.log("Welcome to");

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed");
//         },delay);
//     })
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
//     });
// });

// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "apna college",
//     ()=>{
//     console.log("success : your data was saved");
//     savetoDb(
//         "hello world",
//         ()=>{
//         console.log("success2: data2 saved");
//         savetoDb(
//             "ravindra",
//             ()=>{
//             console.log("success3: data3 saved");
//             },
//             ()=>{
//                 console.log("failure3 : weak connection");
//             }
//         );
//         },
//         ()=>{
//             console.log("failure2 : weak connection");
//         }
//     );
//     },
//     ()=> {
//     console.log("failure : weak connection, data not saved");
//     }
// );

// function savetoDb(data){
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
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log("result of promise : ",result);
//         return savetoDb("hello world")   
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log("result of promise : ",result);
//         return savetoDb("shradha");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log("result of promise : ",result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log("error of promise : ",error);
//     })

// async function greet() {
//     throw "404 page not found";
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
//     await getNum();
//     await getNum();
//     getNum();
// }

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1;
//             if(num>3){
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
//     } catch(err){
//         console.log("error caught");
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
//     console.log("new number is : ",a + 3);
// }

// let obj = {
//     a:undefined,
// }

// let jsonRes = '{"fact":"In multi-cat households, cats of the opposite sex usually get along better.","length":75}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name : "ravindra",
//     marks : 95,
// }

// let jsonRes = '{"fact":"Normal body temperature for a cat is 102 degrees F.","length":51}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name : "ravindra",
//     marks : 90,
// }

let url = "https://catfact.ninja/fact";

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

// console.log("mhdfbk");

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact); 

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact); 
//     }
//     catch(e){
//         console.log("error - ",e);
//     }
//     console.log("jkdcn");
// }

