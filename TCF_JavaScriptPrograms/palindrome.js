function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log("madam is Palindrome:", isPalindrome("madam"));
console.log("hello is Palindrome:", isPalindrome("hello"));
