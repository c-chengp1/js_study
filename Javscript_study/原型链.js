function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
SubType.prototype = new SuperType();
function SubType() {
    this.subproperty = false;
}
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
let instance = new SubType();

console.log(SubType.prototype.constructor); // true