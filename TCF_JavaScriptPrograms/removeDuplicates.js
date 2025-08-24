
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4];
console.log("Original Array:", numbers);
console.log("Array after removing duplicates:", removeDuplicates(numbers));
