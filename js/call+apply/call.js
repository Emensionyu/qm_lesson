
Function.prototype.call2 = function(context) {
    // context.fn = this;
    // let args=Array.prototype.slice.call(arguments,1)
    // console.log(arguments)
    // console.log(args);
    // context.fn(args[0],args[1])
    // delete context.fn;
    var context=context||window
    context.fn = this;
    let args=[];
    for(let i=1;i<arguments.length;i++){
        args.push('arguements['+i+']')
    }
    delete context.fn;
    return eval('context.fn('+args+')')
  

}
var foo = {
    value: 1
};

function bar(name,age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

    // return{
    //     value: this.value,
    //     name: name,
    //     age: age
    // }
}

bar.call2(foo,"mension",22); // 1

