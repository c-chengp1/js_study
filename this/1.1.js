// 指向调用对象
function f() {
    return '姓名：' + this.name;
}
var person = {
    name: '张三',
    describe: f
};

person.describe()

var B = {
    name: '李四',
    describe: f
};
B.describe()