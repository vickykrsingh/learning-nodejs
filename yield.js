// The 'yield' keyword used to pause and resume the generator function

function* getNum(index){
    while(index<5){
        yield index; // using yield keyword return the value without terminate the function execution
        index++;
    }
}

let it = getNum(0);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done)
