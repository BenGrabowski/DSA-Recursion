//1. Counting Sheep

const sheepCount = function(num) {
    let counter = num;
    
    if (counter === 0) {
        return `All sheep jumped over the fence`
    } else {
        counter - 1
        return `${sheepCount(num)}: Another sheep jumps over the fence`
    }
}

console.log(sheepCount(3));