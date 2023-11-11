/**
 * 类表达式
 */
let PersonClass2 = class {
  constructor() {}
  sayName() {}
};
console.log(PersonClass2.name);

/**
 * 类声明
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }

  static create(name) {
    return new Person(name);
  }
}

let p1 = Person.create("hh");
console.log(p1);
