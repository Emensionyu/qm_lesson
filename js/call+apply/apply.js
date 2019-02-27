
Function.prototype.apply2 = function(context,arr) {
  
    var context=context||window
    context.fn = this;
    if(!arr){
        result=context.fn();
    }else{
        var args=[];
        for(let i=0;i<arr.length;i++){
        args.push('arr['+i+']')
        }
        result=eval('context.fn('+args+')')
}
    
    delete context.fn;
    return result;
}
var foo = {
    value: 1
};

function bar(name,age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

    return{
        value: this.value,
        name: name,
        age: age
    }
}

bar.apply2(foo,["mensionyu",22]); // 1

