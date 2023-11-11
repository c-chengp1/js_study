function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    // 继承属性 
    SuperType.call(this, name);
    this.age = age;
}

let obj = new SuperType()
console.log("first", obj)
SubType.prototype = obj


SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let instance1 = new SubType("Nicholas", 29);

/**
 * instance1-->SubType.protoType
 * SubType.protoType =  {
 *  this.name = name;
    this.colors = ["red", "blue", "green"];
 *  this.age = age;
    sayAge = function () {
        console.log(this.age);
    };  
 * }
 * SubType.protoType --> SuperType.prototype
 */

console.dir(instance1)