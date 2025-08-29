function addNum( a , b ){
    return a + b
}

function subNum(a,b){
    return a - b
}

function divide(a,b){
    if( b == 0 ){
        throw new Error("cannot Divide by Zero")
    }
    return a/b
}

module.exports = { addNum , subNum , divide }