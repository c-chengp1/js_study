// var strPrimitive = "I am a string";
// typeof strPrimitive; // "string" 
// console.log(strPrimitive instanceof String); // false
// 工厂模式
// function createPerson(name, age, job) {
//     let o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         console.log(this.name);
//     };
//     return o;
// }
// let person1 = createPerson("Nicholas", 29, "Software Engineer");
// let person2 = createPerson("Greg", 27, "Doctor");

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName() {
    console.log(this.name);
}

// let o1 = new Object();
// let o2 = new Object();
// Person.call(o1, "Kristen", 25, "Nurse");
// Person.call(o2, "Kristen", 25, "Nurse");
let o1 = new Person("Nicholas", 29, "Software Engineer");
let o2 = new Person("Greg", 27, "Doctor");
console.log(o1.sayName === o2.sayName)