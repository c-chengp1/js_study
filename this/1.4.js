// 避免数组处理方法中的 this
var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this + ' ' + item);
        });
    }
}

o.f()

// 避免回调函数中的 this 
var o = new Object();
o.f = function () {
    console.log(this === o);
}

// jQuery 的写法
$('#button').on('click', o.f);
