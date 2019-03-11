var data=[{name:'Zachary',age:28},{name:'mensionyu',age:20}]

console.log(data.sort(compare("age")))

function compare(propertyName){
    return function(object1,object2){
        var value1=object1[propertyName];
        var value2=object2[propertyName];
        if(value1<value2){
            return -1
        }else if(value1>value2){
            return 1
        }else{
            return 0
        }
    
    }
}