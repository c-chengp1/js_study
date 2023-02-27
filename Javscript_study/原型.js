// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = sayName;
// }
// function sayName() {
//     console.log(this.name);
// }

// console.log(Person.prototype.constructor)
function Person() { }
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let keys = Object.getOwnPropertyNames(Person.prototype)
console.log(keys)