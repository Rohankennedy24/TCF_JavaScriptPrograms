function findLargest(arr) {
    if (arr.length === 0) {
        return "Array is empty!";
    }
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
let numbers = [12, 45, 67, 23, 89, 5];
console.log("Array:", numbers);
console.log("Largest number is:", findLargest(numbers));
