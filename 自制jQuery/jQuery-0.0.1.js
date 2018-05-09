var $ = jQuery = function(selector, context){  
    return new jQuery.fn.init(selector, context);      // 返回类的实例  
};  

jQuery.fn = jQuery.prototype = {
    init: function (selector, context) {
        selector = selector || document;
        context = context || document;

        if(selector.nodeType){                  // 如果选择符为节点对象  
            this[0] = selector;                 // 把参数节点传递给实例对象的数组  
            this.length = 1;                    // 并设置实例对象的 length 属性，定义包含的元素个数  
            this.context = selector;            // 设置实例的属性，返回选择范围  
            return this;                        // 返回当前实例  
        }
        if(typeof selector === "string"){       // 如果选择符是字符串  
            var e = context.getElementsByTagName(selector); // 获取指定名称的元素  
            for(var i = 0; i<e.length; i++){ // 遍历元素集合，并把所有元素填入到当前实例数组中  
                this[i] = e[i];  
            }  
            this.length = e.length;             // 设置实例的 length 属性，即定义包含的元素个数  
            this.context = context;             // 设置实例的属性，返回选择范围  
            return this;                        // 返回当前实例  
        } else {  
            this.length = 0;                    // 否则，设置实例的 length 属性值为 0  
            this.context = context;             // 设置实例的属性，返回选择范围  
            return this;                        // 返回当前实例  
        }

        this.length = 0;
        this.test = function(){
            return this.length;
        }
        return this
    },
    jquery: "1.3.2",          // 原型属性  
    length: 1,
    size: function(){ // 原型方法  
        return this.length;  
    }
};

jQuery.fn.init.prototype = jQuery.fn; // 使用 jQuery 的原型对象覆盖 init 的原型对象  

console.log($().jquery);
console.log($().size());

window.onload = function () {

    for(var i=0;i<10;i++){

        (function(i){
    
            var a=document.createElement('a');
    
            a.innerHTML=i+'<br>';
    
            document.body.appendChild(a);
    
            a.addEventListener('click',function(e){
                e.preventDefault();  //取消默认事件，指a标签
                alert(i);
            });
    
        })(i);
    
    }
    
}

