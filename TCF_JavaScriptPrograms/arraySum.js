function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
let numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);
console.log("Sum of array elements:", arraySum(numbers));
