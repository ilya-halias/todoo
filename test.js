// let V = 1500 ;
// let waterIn = 30 ;
// let waterOut = 10 ;
// let water = 0;
// let time =0
// while (water < V ){
//  if (water !== 1500 ){
//   water += waterIn - waterOut;
//   time++;
//  }
// }
// console.log(time)

// let vasyaAge = 22;
// let vovaAge = 17;
// let mishaAge = 25;
//
// let minAge = -1;
// let middleAge = -1;
// let maxAge = -1;
//
// if ( vasyaAge > vovaAge && vasyaAge > mishaAge){
//  vasyaAge = maxAge;
// }
// else if (vasyaAge < vovaAge && vasyaAge < mishaAge ){
//  vasyaAge = minAge;
// }
// else if (vasyaAge > vovaAge && vasyaAge < mishaAge || vasyaAge < vovaAge && vasyaAge > mishaAge ){
//  vasyaAge = middleAge;
// }


// let value = Number (prompt( "Введите число"));
// for (let i = 0; i <= value; i++){
//     for ( let j = 0; j <= value; j++){
//         if (value === i * j){
//             console.log(i+","+j)
//         }
//     }
// }

// const user = {};
// user.name = "Vlad";
// const  userName = user.name;
// user ["LastName"] = "Tarasov"
//
// console.log(user)
// console.log(userName)
//
// const data = {};
// for (let i=0; i< 10 ; i++){
//     const propName = `data_${i}`;
//     data[propName] = i;
// }
// console.log(data)


// const user = {
//     name: "Vlad",
//     lastName: "Tarasov",
//     address: {
//         city: "Minsk",
//         street: "timiryazeva"
//     }
// }

// const person = {
//     getFullName: function () {
//         return `Full name is ${this.name} ${this.lastName}`
//     }
// }

// const userVlad = {
//     name: "Vlad",
//     lastName: "Popov",
//     getFullName: function () {
//         return `Full name is ${this.name} ${this.lastName}`
//     }
//
// }
//
// console.log(userVlad.getFullName())
//
// const userVova = {
//     name: "Vova",
//     lastName: "Popozoglo",
//     getFullName: function () {
//         return `Full name is ${this.name} ${this.lastName}`
//     }
//
// }

// const userVladimir = {
//     name: "Vladimir",
//     lastName: "Pivovarov",
//     getFullName: function () {
//         return `Full name is ${this.name} ${this.lastName}`
//
//     },
//     getInitials: function (){
//         return `${this.name[0]} ${this.lastName[0]}`
//     }
// }
//
// console.log(userVladimir.getFullName())
// console.log(userVladimir.getInitials())
//


// const maxFloor = 20;
// const minFloor = -4;
// let currentFloor = 1;
//
//
// while (true) {
//     let floor = Number(prompt("Введите этаж"));
//     if (floor > maxFloor || floor < minFloor) {
//         console.log("error")
//     }
//     else if (currentFloor === floor){
//         console.log("Это ваш этаж")
//     }
//     while ( floor <= maxFloor && floor > currentFloor){
//         console.log(currentFloor + "- едем");
//         currentFloor++
//     }
//
//     while (floor < currentFloor && floor >= minFloor){
//         console.log(currentFloor + "- едем");
//         currentFloor--
//     }
//     console.log(currentFloor + "- приехали")
//
// }

// let chislo = Number (prompt("Введите число"));
//
// for(let i=0;i<=chislo;i++){
//     for(let j=0;j<=chislo;j++){
//         if(i*j===chislo)
//
//             console.log(i+","+ j);
//     }
// }

// const vowels = "abcdefg";
//
// for(let i = 0; i < vowels.length; i++) {
//     console.log(vowels[i]);
// }

// const booleans = [];
// const numbers = [];
// const string = [];
//
// const array = [1, false, "2", 3, "4", true, 5, "6", 7, true, "8", 9 ,"10"];
//
// for (const element of array){
//     if (typeof element === booleans){
//         booleans.push(element);
//         continue;
//     }
//
// }
// for (const element of array){
//     if (typeof element === string){
//         string.push(element);
//         continue;
//     }
//
// }
// for (const element of array){
//     if (typeof element === numbers){
//         numbers.push(element);
//     }
//
// }
//
// console.log(booleans);
// console.log(numbers);
// console.log(string);


// const users = [
//     {name: "Vlad", age:30},
//     {name: "Vova", age:35},
//     {name: "Max", age:50},
// ]
// // const usersNames = users.map(user => ....)
// //
// // // const array = func( users, "name") -> [{name:
// //
// // const func = (array, propName) => {
// //     return array.map((item) => ({[propName]: item[propName]}));
// // };
// // console.log(func(user,"name"));
//
// const userInfo = users.map(user=> `${user.name}=${user.age}`)
// console.log(userInfo)


// const twoSum = [-3,0,2,4,5]
// const result = 7
//
// for (let i= 0; i<twoSum.length; i++){
//     for (let j=i+1; j<twoSum.length; j++){
//         if (twoSum[i]+twoSum[j]===result){
//             return  ({twoSum[i] , twoSum[j]});
//         }
//     }
// }

//
// const userVlad = {
//     mame: "Vlad",
//     lastName: "Tarasov",
//     age:30
// };
//
// for (let key in userVlad){
//     console.log(key);
//
//     console.log(userVlad[key]);
// }
// function min(a, b) {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
//
//
//     let result = min(2, 5);
//
//
//     console.log(result);
// }

// function pow (a,b) {
//     return a ** b;
// }
//       let result= pow(3,3);
//     alert(result);

//
// ///////////
// function ask (question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }
// function showOK() {
//   alert("Вы согласны.");
// }
// function showCancel(){
//     alert("Вы отказались.");
// }
// ask("Вы согласны?", showOK , showCancel);
//
//
//
// function ask (question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//     function () {alert("Вы согласились.");},
//     function () {alert("Вы отменили выполнение");}
// )
//
//
//
// function ask (question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Вы согласны?",
//      () => alert("Вы согласились."),
//      () => alert("Вы отменили выполнение")
// )

// ///////////////////////
// const sayHi3 = () => {
//     return alert('hello')
// }
//
// function sayhi2() {
//     return alert('hello')
// }
//
// let sayHi = () => alert("hello");
//
// sayHi()
//
// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome = (age < 18) ?
//     () => alert('Привет!') :
//     () => alert("Здравствуйте!");
//
// welcome();


// function sumInput() {
//
//     let numbers = [];
//
//     while (true) {
//
//         let value = prompt("Введите число", 0);
//
//         // Прекращаем ввод?
//         if (value === "" || value === null || !isFinite(value)) break;
//
//         numbers.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// alert( sumInput() );

const people = [
    {name: "Anton" , age: 28, budget: 45550},
    {name: "Anton" , age: 28, budget: 12550},
    {name: "Anton" , age: 28, budget: 88550},
    {name: "Dima" , age: 17, budget: 4550}
]

// for( let chel of people){
//     console.log(chel)
// }

// people.forEach(function (chel){
//     console.log(chel)
// })

// people.forEach((chel => console.log(chel)))

// const newPeople = people.map(chel =>{
//     return chel.name
// })
// console.log(newPeople)

// const newPeople = people.map(chel=> `${chel.name} (${chel.age})`)
// console.log(newPeople)

// const grownap = []
// for (let i=0; i<people.length; i ++){
//     if(people[i].age >= 18){
//         grownap.push((people[i]))
//     }
// }
// console.log(grownap)

// const grownap = people.filter(chel => chel.age >=18)
// console.log(grownap)

// const amount = people.reduce((total,chel)=>{
//     return total+chel.budget
// }, 0)
// console.log(amount)
//
// const amount = people.reduce((total,chel)=> total+chel.budget,0)
// console.log(amount)

// fetch("https://jsonplaceholder.typicode.com/posts")

//
// const array = [1, 2, 3, 4, 5, 6];
// Array.prototype.toString= function () {
//
//     let result = this.reduce((sum, elem) =>  sum + elem,0) ;
//      return result
//
//     };
//
// console.log(String.array)


// function fullName(age, city){
//     return `Full name is ${this.firstName} ${this.lastName} ${age} ${city}`;
// }
// const vlad = {
//     firstName: "Vlad",
//     lastName: "Tarasov",
// };
//
// const vova = {
//     firstName: "Vova",
//     lastName: "Popov",
// };
//
// console.log(fullName.call(vlad, 30, "Minsk"))
// console.log(fullName.apply(vlad, [30, "Minsk"]))
//
// const vladFullName = fullName.bind(vlad, 30, "Minsk")
//
// function customBind(obj, func){
//     return (...args) => func.call(obj, ...args);
// }
// const bindedFunc = customBind(vlad, fullName());
// console.log(bindedFunc(30,"Minsk"))

const regExp = /\d{1,2}-\d{2}-\d{4} \d{1,2}:\d{2}/;

console.log(regExp.test("22-12-2022 22:22"))
console.log(regExp.test("2-12-2022 2:22"))