function add(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mul(a,b){
    return a * b
}

function div(a,b){
    if (b === 0) {
        throw new RangeError('Division by zero ABRP2627')
    }
    return a / b
}

function sqrt(x){
    if (x < 0) {
        throw new RangeError('Square root of negative number ABRP2627')
    }
    return Math.sqrt(x)
}

// Exportación al final 
export {add, sub, mul, div, sqrt}       //ABRP2627