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
    if (exp < 0) {
        console.log('exponent should be >= 0');
    } else if (exp === 1) {
        return base;
    }
    return base * powerCalculator(base, exp -1);  
}

//3. Reverse String
const reverseString = function(strng) {
    if (strng.length === 0) {
        return newStrng;
    }
    newStrng = strng.slice(-1);
    return reverseString(newStrng);
}