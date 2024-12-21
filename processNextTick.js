function add(callfrom,n1,n2){
    console.log(callfrom," ",n1+n2)
}

setImmediate(()=>{
    add("SetImmediate",1,2)
});

setTimeout(()=>{
    add("SetTimeout",3,4)
});

process.nextTick(()=>{
    add("Process next tick",5,6)
})

add("Direct",7,8)

// Direct   15
// Process next tick   11
// SetTimeout   7
// SetImmediate   3