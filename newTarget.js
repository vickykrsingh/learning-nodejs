// how we can the object is created through a function keyword or class keyword 
// we can check this through new.target 

function person(name,age){
    console.log(new.target)
    if(!new.target){
        console.log('simple call')
    }else{
        console.log('creating an object')
    }
    this.name=name;
    this.age=age;
    console.log('inside the function')
}

const p1 = new person('vicky',22);
console.log(p1.name)
console.log(p1.age)


person()


// [Function: person]
// creating an object
// inside the function
// vicky
// 22
// undefined
// simple call
// inside the function