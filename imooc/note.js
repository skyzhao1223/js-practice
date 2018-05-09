function Elem(id) {
    this.elem = document.getElementById(id)
}
Elem.prototype.html = function (val) {
    var elem = this.elem
    if (val) {
        elem.innerHTML = val
        return this
    } else {
        return elem.innerHTML
    }
}
Elem.prototype.on = function (type, fn) {
    var elem = this.elem
    elem.addEventListener(type, fn)
    return this
}
var div1 = new Elem('div1')
console.log(div1.html());
div1.html('<p>hello</p>').on('click', function(){
    console.log(1)
}).html('<p>javascript</p>')


function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.class = 'class-1'
}
f = new Foo('张三',22)
f1 = new Foo('张三1',23)
console.log(f,f1);
