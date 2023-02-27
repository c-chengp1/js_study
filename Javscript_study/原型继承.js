function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
