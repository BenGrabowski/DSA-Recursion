//1. Counting Sheep

const sheepCount = function(num) {
    
    //base case
    if (num <= 0) {
        console.log('All sheep jumped over the fence');
    //recursive case
    } else {
        console.log(`${num}: Another sheep jumps over the fence`);
        sheepCount(num - 1);
    }    
}

//2. Power Calculator 

const powerCalculator = function(base, exp) {
    
    //base case
    if (exp < 0) {
        console.log('exponent should be >= 0');
    //recursive case
    } else {
        
    }
}