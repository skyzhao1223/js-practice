function MyPromise(fn) {
    this.value;
    this.status = 'pending';
    this.resolveFunc = function() {}
    this.rejectFunc = function() {}
    fn( this.resolve.bind(this), this.reject.bind(this) )
}
MyPromise.prototype.resolve = function(val) {
    if (this.status == 'pending') {
        this.status = 'resolved'
        this.value = val
        setTimeout(() => {
            this.resolveFunc(this.value)
        }, 0);
    }
}
MyPromise.prototype.reject = function(val) {
    if (this.status == 'pending') {
        this.status = 'rejected'
        this.value = val
        setTimeout(() => {
            this.rejectFunc(this.value)
        }, 0);
    }
}
MyPromise.prototype.then = function(resolveFunc, rejectFunc) {
    var self = this;
    return new MyPromise(function(resolve_next, reject_next) {
      function resolveFuncWrap() {
        var result = resolveFunc(self.value);
        if (result && typeof result.then === 'function') {
          result.then(resolve_next, reject_next);
        } else {
          resolve_next(result);
        }
      }
      function rejectFuncWrap() {
        var result = rejectFunc(self.value);
        if (result && typeof result.then === 'function') {
          result.then(resolve_next, reject_next);
        } else {
          resolve_next(result);
        }
      }
      self.resolveFunc = resolveFuncWrap;
      self.rejectFunc = rejectFuncWrap;
    })
}
var fn = function(resolve, reject){
    resolve('hello1');
}
var p = new MyPromise(fn)
p.then(function(data){
    console.log(data);
    return 'hello again1';
}).then(function(data){
    console.log(data);
    return new MyPromise(function(resolve){
        var innerData='hello third time!1';
        resolve(innerData);
    })
}).then(function(data){
    console.log(data);
})
